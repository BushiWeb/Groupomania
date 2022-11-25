------------------------------------------------------
-- ROLES CREATION
------------------------------------------------------
-- Administrator of the project's database. Owns the databases and its objects.
CREATE ROLE project_admin WITH
    CREATEROLE
    LOGIN
    PASSWORD 'admin_password';

-- User of the project. Has minimal rights on the database's objects.
CREATE ROLE project_user WITH
    LOGIN
    PASSWORD 'user_password';


------------------------------------------------------
-- DATABASE CREATION
------------------------------------------------------
-- Create the database. The database is owned by the project administrator.
CREATE DATABASE groupomania WITH
    OWNER = project_admin
    ENCODING = 'UTF8';


-- Connect to the database
\connect -reuse-previous=on "dbname=groupomania user=project_admin password=admin_password"


------------------------------------------------------
-- DATABASE STRUCTURE
------------------------------------------------------
------------------------------------------------------
-- Schemas creation
CREATE SCHEMA admin;
CREATE SCHEMA authentication;
CREATE SCHEMA users;
CREATE SCHEMA posts;

------------------------------------------------------
-- Tables creation
-- This table contains the user's roles. The id must be manually set.
CREATE TABLE admin.roles(
   role_id SMALLINT PRIMARY KEY,
   name VARCHAR(50) UNIQUE NOT NULL
);

-- Table containing all the refresh tokens that haven't been invalidated. The primary key is not a number, part of a sequence, but a UUID that is set by the user accessing the database.
CREATE TABLE authentication.refresh_tokens(
   token_id UUID PRIMARY KEY,
   token_value VARCHAR(60) NOT NULL,
   expiration TIMESTAMP WITH TIME ZONE NOT NULL
);

-- This table contains all the registered users. The email must be unique and it's format is checked. this table also keeps count of the consecutive failed login attempts, and the date until the user is locked.
CREATE TABLE users.users(
   user_id SERIAL PRIMARY KEY,
   email VARCHAR(255) UNIQUE NOT NULL CHECK (email ~ '^(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$'),
   password VARCHAR(60) NOT NULL,
   failed_login_attempt_count INTEGER NOT NULL DEFAULT 0,
   locked_until TIMESTAMP WITH TIME ZONE,
   role_id INTEGER NOT NULL DEFAULT 2,
   FOREIGN KEY(role_id) REFERENCES admin.roles(role_id)
   ON DELETE RESTRICT ON UPDATE RESTRICT
);

-- This table contains the list of all the posts, including their creation date and last update date. One post belongs to one user.
CREATE TABLE posts.posts(
   post_id SERIAL PRIMARY KEY,
   title TEXT NOT NULL,
   message TEXT NOT NULL,
   image_url TEXT,
   creation_date TIMESTAMP (0) WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
   last_update_date TIMESTAMP (0) WITH TIME ZONE,
   writer_id INTEGER NOT NULL,
   FOREIGN KEY(writer_id) REFERENCES users.users(user_id)
   ON DELETE CASCADE ON UPDATE CASCADE
);

-- This table contains all the likes. A like is a unique relation between one post and one user.
CREATE TABLE posts.likes(
   user_id INTEGER,
   post_id INTEGER,
   PRIMARY KEY(user_id, post_id),
   FOREIGN KEY(user_id) REFERENCES users.users(user_id)
   ON DELETE CASCADE ON UPDATE CASCADE,
   FOREIGN KEY(post_id) REFERENCES posts.posts(post_id)
   ON DELETE CASCADE ON UPDATE CASCADE
);

------------------------------------------------------
-- Triggers creation
-- Trigger to update the 'locked_until'field of the users table when the 'failed_login_attempt_count' field is updated.
CREATE FUNCTION users.trigger_locked_until_update()
   RETURNS TRIGGER
   LANGUAGE PLPGSQL
   AS
$$
BEGIN

   IF NEW.failed_login_attempt_count >= 5 THEN
      NEW.locked_until := NOW() + INTERVAL '30 seconds' * POWER(2, NEW.failed_login_attempt_count - 5);
   ELSE
      NEW.locked_until := NULL;
   END IF;

   RETURN NEW;
END;
$$;

CREATE TRIGGER authentication_failure_update
BEFORE UPDATE
ON users.users
FOR EACH ROW
WHEN (NEW.failed_login_attempt_count IS DISTINCT FROM OLD.failed_login_attempt_count)
EXECUTE PROCEDURE users.trigger_locked_until_update();

-- Trigger to update the 'last_update_date' field of the posts table when the table is updated.
CREATE FUNCTION posts.trigger_last_updated_update()
   RETURNS TRIGGER
   LANGUAGE PLPGSQL
   AS
$$
BEGIN

   NEW.last_update_date := CURRENT_TIMESTAMP(0);

   RETURN NEW;
END;
$$;

CREATE TRIGGER post_update
BEFORE UPDATE
ON posts.posts
FOR EACH ROW
EXECUTE PROCEDURE posts.trigger_last_updated_update();


------------------------------------------------------
-- ROLES PRIVILEGES GRANTING
------------------------------------------------------
GRANT USAGE ON SCHEMA admin, authentication, users, posts TO project_user;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA admin, authentication, users, posts TO project_user;
GRANT SELECT ON admin.roles TO project_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON authentication.refresh_tokens, users.users, posts.posts, posts. likes TO project_user;