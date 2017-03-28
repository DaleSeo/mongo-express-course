# MongoDB Driver

The MongoDB driver for NodeJS is the client library that handles the interface between the NodeJS application and the MongoDB server.

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

```js
var MongoClient = require('mongodb').MongoClient,
  assert = require('assert')

// Connection URL
var url = 'mongodb://localhost:27017/myproject'

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  db.close()
})
```

Run your app from the command line with:

```bash
$ node app.js
```

The application should print **Connected successfully to server **to the console.

## Insert a Document {#insert-a-document}

Add to **app.js **the following function which uses the **insertMany **method to add three documents to the **documents **collection.

```js
function insertDocument (collection, doc, callback) {
  collection.insertOne(doc, (err, result) => {
    assert.equal(null, err)
    console.log(result)
    assert.equal(1, result.result.n)
    callback(result.ops[0]._id)
  })
}
```

The **insert **command returns an object with the following fields:

* **result **Contains the result document from MongoDB
* **ops **Contains the documents inserted with added **\_id **fields
* **connection **Contains the connection used to perform the insert

Add the following code to call the **insertDocuments **function:

```js
// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  // Get the documents collection
  let collection = db.collection('students')

  insertDocument(collection, {name: 'Dale Seo', score: 90}, id => {
    console.log('>>> Inserted:', id)

    db.close()
  })
})
```

Run the updated **app.js **file:

```bash
$ node app.js
```

The operation returns the following output:

```bash
Connected successfully to server
Inserted 3 documents into the collection
```

## Find All Documents {#find-all-documents}

Add a query that returns all the documents.

```js
function findDocument (collection, id, callback) {
  collection.findOne({_id: id}, (err, doc) => {
    assert.equal(null, err)
    console.log(doc)
    assert(id.equals(doc._id))
    callback(doc)
  })
}
```

This query returns all the documents in the **documents **collection. Add the **findDocument **method to the **MongoClient.connect **callback:

```js
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  findDocuments(db, function () {
    db.close()
  })
})
```

## Update a Document

The following operation updates a document in the **documents **collection.

```js
function updateDocument (collection, id, doc, callback) {
  collection.updateOne({_id: id}, {$set: doc}, (err, result) => {
    assert.equal(null, err)
    console.log(result)
    assert.equal(1, result.result.n)
    callback()
  })
}
```

The method updates the first document where the field a is equal to 2 by adding a new field b to the document set to 1. Next, update the callback function from MongoClient.connect to include the update method.

## Remove a document {#remove-a-document}

Remove the document where the field**a**is equal to**3**.

```js
function removeDocument (collection, id, callback) {
  collection.deleteOne({_id: id}, (err, result) => {
    assert.equal(null, err)
    console.log(result)
    assert.equal(1, result.result.n)
    callback()
  })
}
```

Add the new method to the MongoClient.connect callback function.

```js

```



