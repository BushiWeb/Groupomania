DROP SCHEMA IF EXISTS admin, authentication, users, posts CASCADE;


CREATE SCHEMA admin;

CREATE TABLE admin.roles(
   role_id SMALLINT PRIMARY KEY,
   name VARCHAR(50) UNIQUE NOT NULL
);

INSERT INTO admin.roles (role_id, name)
VALUES (1, 'admin'), (2, 'user');



CREATE SCHEMA authentication;

CREATE TABLE authentication.refresh_tokens(
   token_id UUID PRIMARY KEY,
   token_value VARCHAR(60) NOT NULL,
   expiration TIMESTAMP WITH TIME ZONE NOT NULL
);



CREATE SCHEMA users;

CREATE TABLE users.users(
   user_id SERIAL PRIMARY KEY,
   email VARCHAR(255) UNIQUE NOT NULL CHECK (email ~ '(?:[a-z0-9!#$%&''*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])'),
   password VARCHAR(60) NOT NULL,
   failed_login_attempt_count INTEGER NOT NULL DEFAULT 0,
   locked_until TIMESTAMP WITH TIME ZONE,
   role_id INTEGER NOT NULL DEFAULT 2,
   FOREIGN KEY(role_id) REFERENCES admin.roles(role_id)
   ON DELETE RESTRICT ON UPDATE RESTRICT
);

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



CREATE SCHEMA posts;

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

CREATE TABLE posts.likes(
   user_id INTEGER,
   post_id INTEGER,
   PRIMARY KEY(user_id, post_id),
   FOREIGN KEY(user_id) REFERENCES users.users(user_id)
   ON DELETE CASCADE ON UPDATE CASCADE,
   FOREIGN KEY(post_id) REFERENCES posts.posts(post_id)
   ON DELETE CASCADE ON UPDATE CASCADE
);
