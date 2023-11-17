# Groupomania API

The Groupomania API allows to execute actions related to the Groupomania social network, like loging in, creating posts or liking those posts;

## Installation

When you download the source code, you can execute:

```
npm install
```

This command will install all the required packages.

## Configuration

Make sure to check the default configuration to make sure it suits your needs.

### Environment variables

You will find a file called **env.example** containing all the required environment variables and some example values.

You _MUST_ rename it **.env** and update any value that needs to be updated. Make sure secrets and token are long enough.

### Configuration files

The config folder contains two configuration files:

-   **development-config.toml** is only used during the development,
-   **config.toml** is the configuration file used in production. It is the one you _SHOULD_ check.

To update a parameter:

1. Uncomment the corresponding table name (`[name]`) by removing the #;
2. Uncomment the parameter line by removing the #;
3. Change the parameter value;

## Starting the server

**Note**: Make sure the [database](../database/README.md) is up and running. Otherwise, the application won't work.

To start the server in development mode, use

```
npm run dev
```

It uses _nodemon_ to watch for file changes.

To start the server for production, use

```
npm start
```

### API documentation

To consult the API documentation, you have two options:

1. Build the documentation as a static and dependance free HTML file
2. Serve the documentation using a local server

#### Building the documentation

The following command generates a **groupomania_doc.html** file. This file is dependance free and can easily be shared.

```
npm run buildDoc
```

#### Serving the documentation

```
npm run watchDoc
```

### Running the tests

```
npm test
```

Runs all the tests. If you wan't to check the coverage, use

```
npm run coverage
```
