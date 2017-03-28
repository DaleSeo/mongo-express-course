# MongoDB Driver

> The MongoDB Driver for NodeJS is the client library that handles the interface between the NodeJS application and the MongoDB server.

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

## Start a MongoDB Server {#start-a-mongodb-server}

```bash
$ mongod
```

You should see the **mongod **process start up and print some status information.

## Connect to MongoDB

Create a new **app.js** file and add the following code to try out some basic CRUD operations using the MongoDB driver.



Add code to connect to the server and the database myproject:

