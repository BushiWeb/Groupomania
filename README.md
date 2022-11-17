# Internal social network for Groupomania

This repository contains all the services needed to run the social network:

-   The API source code and documentation
-   The frontend source code
-   The starter database dump

## API

First, you need to install the dependencies of the API

```
cd api
npm install
```

Once the dependencies are installed, you can start the server in production with

```
npm start
```

To view the API documentation, once the dependencies are installed, run

```
npm watchDoc
```

You will find more informations on how to run and test the API in [api/README.md](./api/README.md).

## Database

To install the database:

1. First, install **[PostgreSQL](https://www.postgresql.org/)**, which is the database that is used
2. Second, use the database dump **create.sql** to create the structure in your database. You can use the following command:

```
psql -U superuser -W -d postgres -f path/create.sql
```

with `superuser` being a role with at least **CREATEROLE** and **CREATEDB** privileges; `postgres` being the name of the **postgres** database, or any database but **groupomania**; and `path/create.sql` being the path to the **create.sql** file.

3. Third, use the database dump **init.sql** to add a few data to the database. You can use the following command:

```
psql -U project_admin -W -d groupomania -f path/init.sql
```

with `project_admin` being the role you choose to be the project administrator; `groupomania` being the name of the new database; and `path/init.sql` being the path to the **init.sql** file.

You will find more informations on the installation process and the database structure in the [database/README.md](./database/READMEmd) file.
