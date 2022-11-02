# Database structure for the Groupomania social network

## Installation

### Using psql

In order to install the database, you need to install **[PostgreSQL](https://www.postgresql.org/)** first.

You will find in this folder the file **sql.sql** containing the dump of the database. To install it, run the following command:

```
psql -U username -d db_name -f sql.sql
```

This command connects you to the database `db_name ` with the user `username ` and execute the statements in `sql.sql `. Thus, `username ` needs all the rights to execute those instructions, and they will be executed on the selected database.

We recommand creating a new database to host the tables, as all the used schemas will be deleted first (if they exist) and the _search_path_ will be modified.

We also recommend not using the superuser to access the database with the application, for security reasons. You should create a user with limited access on the tables and objects.

For more informations on the `psql` command and all it's options, visit [the documentation](https://docs.postgresql.fr/10/app-psql.html).

### Using pgAdmin

You can import the database using any administration tool, like **[pgAdmin](https://www.pgadmin.org/)**.

## Structure

The tables are split into 4 schemas:

-   _admin_: containing all tables that the application shouldn't update;
-   _authentication_: containing all tables related to the authentication mechanism;
-   _users_: containing all the users related tables;
-   _posts_: containing all the posts related tables.

### Roles table

This table contains the list of roles. It is part of the _admin_ schema.

By defaults, to roles are inserted:

-   _user_ with id _2_, and the default role for any user;
-   _admin_ with id _1_, and the superuser role.

**The application can access these data but shouldn't be able to update them.**

**Warning:** the _role_id_ field, which is the primary key, is not an auto-updated value. When inserting into the table, you have to give this field a value that respect the _unique_ and _not null_ constraints.

### Refresh_tokens table

This table contains all the refresh tokens that havent been manualy invalidated. It is part of the _authentication_ schema.

For security reasons, the _token_value_ field must only contain the encrypted value of the token, using an algorithm like _bcrypt_ or _Argon_.

Since the value is encrypted, the _token_id_ field can be used to identify the token, by storing the value in the token itself. Since the value needs to be unique and generated before the insertion, a UUID is used.

### Users table

This table contains informations about each user. It is part of the _users_ schema.

The _email_ fields checks that all the values are indeed unique and match an email regular expression.

The _password_ field must only contain encrypted values, using an algorithm like _bcrypt_ or _Argon_.

By default, each user will receive the _user_ role, of id 2. This field references the _roles.role_id_ field.

The fields _failed_login_attempt_count_ and _locked_until_ are used to protect the account from brute force attack. On each unsuccessful login attempt, the _failed_login_attempt_count_ should be incremented, and reset when the user finaly manages to log in. Using a trigger, the _locked_until_ field is automatically updated with _failed_login_attempt_count_, to match the lock time with the number of tries. A user must not log in if it's account is locked, i.e. if _locked_until_ is greater than the current date-time.

### Posts table

This table contains information about each post and is part of the _posts_ schema.

A post contains a _title_ and a _message_, as well as an optionnal _image_url_.

The post date of creation is stored in _creation_date_. By default, the date of the last update _last_update_date_ is null, and is updated at each update using a trigger.

A posts belongs to the user who wrote it. The _writer_id_ field references the _users.user_id_ field.

### Likes table

This table stores the likes, and is part of the _posts_ schema.

A like is simply a relation between one user and one post: if a user likes a post, then the relation is created; and if the user removes its like, then the relation is deleted.

To make sure that one precise user likes one precise post only once, the primary key, and thus the _unique_ constraint, contains the user/post couple.

Of course, the _user_id_ and _post_id_ fields respectively reference the _users.user_id_ and _posts.post_id_ fields.
