# Groupomania API

The Groupomania API allows to execute actions related to the Groupomania social network, like loging in, creating posts or liking those posts;

## Installation and execution

When you download the source code, you can execute:

```
npm install
```

This command will install all the required packages.

### Starting the server

To start the server in development mode, use

```
npm run dev
```

It uses _nodemon_ to watch for file changes.

To start the server for production, use

```
npm start
```

### Building the API

You have two options:

1. Build the documentation as a static and dependance free HTML file
2. Serve the documentation using a local server

#### Building the documentation

The folliwing command generates a **groupomania_doc.html** file. This file is dependance free and can easily be shared.

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
