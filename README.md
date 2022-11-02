# Internal social network for Groupomania

This repository contains all the services needed to run the social network:

-   The API source code
-   The API documentation
-   The frontend source code
-   The starter database dump

## API documentation

To view the API documentation:

```
cd doc
npm install
npm start
```

It is also possible to build the documentation as a dependency free HTML file.

More informations in [doc/README.md](./doc/README.md).

## Database

To install the database:

1. First, install **[PostgreSQL](https://www.postgresql.org/)**, which is the database that is used
2. Second, use the database dump to create the structure in your database. You can use the following command:

```
psql -U username -d db_name -f sql.sql
```

It is also possible to use an administration tool to do those actions, like **[pgAdmin](https://www.pgadmin.org/)**.

For more informations on the database, please read the [database/README.md](./database/READMEmd) file.
