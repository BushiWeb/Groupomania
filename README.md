# Internal social network for Groupomania

This repository contains all the services needed to run the social network:

-   The API source code and documentation
-   The frontend source code
-   The starter database dump

## Database

We use **PostgreSQL** for the database.

To install and setup the database, please refer to the [database README](./database/README.md).

## API

The Groupomania's API allows to fetch and update data, and handles authentication and authorization checks.

To install, configure and start the server, please refer the the [API README](./api/README.md).

_Note_: While executing the commands, make sure you are located within the _./api_ folder. You can use `cd api`.

## Frontend app and BFF

The BFF serves the frontend application.

To install, configure and start the server, please refer the the [API README](./api/README.md). You will also find more informations about the role of the BFF.

_Note_: While executing the commands, make sure you are located within the _./frontend_ folder. You can use `cd frontend`.
