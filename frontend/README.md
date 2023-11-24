# Groupomania's social network frontend

This project contains all the components to install and run the application.

## Description

The application is made of two parts:

- The **frontend**, built with *React*;
- The **BFF**, built with *Express*.

### BFF

On top of serving the frontend page and all other resources, the BFF acts as a gateway between the application and the API, providing more security and handling all the requests' logic.

Thanks to it, the users can identify themselves using sessions and cookies. Although JWTs are still used under the hoods by the server, sessions provide more security and a better user experience, since the tokens are not stored in the browser but the connection is still maintained between refreshes.

It also composes requests and aggregates data from multiple sources into one request, allowing for example to check the password before a dangerous action.

## Installation

After downloading the source code or cloning the repository, simply run

```
npm install
```

All required packages will be installed.

## Configuration

Make sure to check the default configuration to make sure it suits your needs.

### Environment variables

You will find a file called **[env.example](./env.example)** containing all the required environment variables and some example values.

You *MUST* rename it **.env** and update any value that needs to be updated. Make sure secrets and token are long enough.

### Configuration files

The **[config.toml](./config/config.toml)** is the configuration file used in production. It is the one you _SHOULD_ check. The given values are values used by default, so using those won't change the behavior of the API.

To update a parameter:

1. Uncomment the corresponding table name (`[name]`) by removing the #;
2. Uncomment the parameter line by removing the #;
3. Change the parameter value;

*Note*: if you wish to run the BFF in development mode, you SHOULD update the *[development-config.toml](./config/development-config.toml)* configuration file. It can take the same configuration variables as *config.toml*.

***WARNING***: Make sure to update the *cors.origin* parameter if you updated the *BFF_PORT* environment variable.

## Launching the application

**Note**: Make sure the [API](../api/README.md) is available. Otherwise, the application won't work.

To build the project, run :

```
npm run build
```

Once the project is built, you can start the bff server with :

```
npm start
```

**Note**: it is possible to build and start the server at the same time with `npm run build-and-start`.

Once the bff server is running, simply use any browser to visit the address of the server and enjoy!

## Scripts

### frontend-dev

Equivalent to the Create React App's script `start`. Run the frontend in development mode and reload the page on changes.

It uses the proxy property from the _package.json_ file to request from the BFF, so make sure to update the port if you change it.

Running the script in development mode still requires the BFF and the API to run.

### frontend-test

Equivalent to the Create React App's script `test`. Run all the react app's tests.

### bff-dev

Run the backend in development mode and restart the server on changes. In development mode, anti-CSRF tokens are optional.

### bff-start

Run the backend in development mode but without restarting it on changes.

### bff-test

Run all the tests of the BFF.

### start

Run the backend in production mode.

### build

Runs the Create React App's `build` script and compresses all static files in the build folder afterward.

### build-and-start

Runs the `build` script and then the `start` script.

### eject

**WARNING**: this operation can be undone. Use it at your own risk.

Equivalent to the Create React App's script `eject`.

### format

Uses *Prettier* and *ESLint* to format and lint BFF and frontend code.