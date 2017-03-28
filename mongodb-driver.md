# MongoDB Driver

> Drivers for MongoDB are the client libraries that handle the interface between the application and the MongoDB servers and deployments.

## Create a NodeJS Project

You can use NPM \(Node Package Manager\) to install the dependency in your project.

First, create a directory where your application will live.

```bash
$ mkdir myproject
$ cd myproject
```

Enter the following command and answer the questions to create the initial structure for your new project:

```bash
$ npm init
```

Next, install the MongoDB driver and its dependencies with the command:

```bash
$ npm install --save mongodb
```

This will download the MongoDB driver and add a dependency entry in your `package.json` file.

You should see **NPM **download a lot of files. Once it’s done you’ll find all the downloaded packages under the **node\_modules **directory.

