# Groupomania API

The Groupomania API allows the execution of actions related to Groupomania's social network, like logging in, creating posts or liking those posts;

## Installation

When you download the source code, you can execute:

```
npm install
```

This command will install all the required packages.

## Configuration

Make sure to check the default configuration to make sure it suits your needs.

### Environment variables

You will find a file called **[env.example](env.example)** containing all the required environment variables and some example values. These include all the required information to connect to the database (username, password, host) and to create and decode JSON Web Tokens.

You _MUST_ rename it **.env** and update any value that needs to be updated.

#### Database configuration

The environment variables `DB_NAME`, `DB_USER` and `DB_PASSWORD` need to be updated to reflect the _database name_, _project_user name_ and _user_password_ you chose when installing the database. The given values are the default values used in the database _create.sql_ file.

The environment variables `DB_HOST` and `DB_PORT` allow you to locate your database. The default values correspond to a local installation. `DB_SSL` and `DB_PROTOCOL` give more information on how to connect to the database. For local installation, these shouldn't change.

Finally, `DB_SGBD` shouldn't be updated unless you know what you are doing. It allows you to change your database management system and can take one of the following values: _mysql_, _postgres_, _sqlite_, _db2_, _mariadb_ and _mssql_.

#### JSON Web Tokens (JWT) configuration

The API uses two types of JWT:

-   The **access token** authenticates the user for most requests. It MUST be short-lived.
-   The **refresh token** is used on special requests to log the user out or to get a new access token without credentials. It SHOULD have a longer life than the access token.

You MUST update the `JWT_KEY` and `REFRESH_JWT_KEY` environment variables. The new values must be random and secured strings and must be different from one another. We recommend you choose a 512-bit string.

You MAY change the `JWT_VALID` and `REFRESH_JWT_VALID` environment variables to change the maximum age of both tokens.

The `JWT_ALG` and `REFRESH_JWT_ALG` environment variables define the algorithm used to encode the tokens. Update these values at your own risk.

### Configuration files

The **[config.toml](./config/config.toml)** is the configuration file used in production. It is the one you _SHOULD_ check. The given values are values used by default, so using those won't change the behavior of the API.

To update a parameter:

1. Uncomment the corresponding table name (`[name]`) by removing the #;
2. Uncomment the parameter line by removing the #;
3. Change the parameter value;

*Note*: if you wish to run the server in development mode, you SHOULD update the *[development-config.toml](./config/development-config.toml)* configuration file. It can take the same configuration variables as *config.toml*.

## Starting the server

**Note**: Make sure the [database](../database/README.md) is up and running. Otherwise, the application won't work.

To start the server in production, use

```
npm start
```

*Note*: if you wish to run the server in development mode, you *MAY* use `npm run dev`. It will use the development configuration, use the console as the logging output and watch changes.

## Admin account

When starting the server for the first time, an administrator account will be automatically created if it doesn't yet exist in the database. The administrator has the right to update and delete other user's posts, and to delete and change the role of other users.

You can configure the email address used for this account in the configuration file.

The password will be randomly generated and printed in the log, under the label _groupomania:api:loader:adminUser_.

**_WARNING_**: although the password generated is secured, it is still accessible within the logs. You MUST change it quickly, otherwise, it might get stolen.

## API Documentation

To consult the API documentation, you have two options:

1. Build the documentation as a static and dependency-free HTML file
2. Serve the documentation using a local server

### Building the documentation

The following command generates a **groupomania_doc.html** file. This file is dependency-free and can easily be shared.

```
npm run buildDoc
```

### Serving the documentation

```
npm run watchDoc
```

## Running the tests

```
npm test
```

Runs all the tests. If you want to check the coverage, use

```
npm run coverage
```
