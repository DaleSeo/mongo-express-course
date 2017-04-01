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
const MongoClient = require('mongodb').MongoClient,
  assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017/test'

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

Add to **app.js **the following function which uses the **insertOne **method to add a document to the **students **collection.

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

The **insertOne **command returns an object with the following fields:

* **result **Contains the result document from MongoDB
* **ops **Contains the documents inserted with added **\_id **fields

Add the following code to call the **insertDocument **function:

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
>>> Inserted: 58da1191364fd2a2e70a0e1d
```

## Find a Document {#find-all-documents}

Add a query filter to find a single document which meet the query criteria.

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

Only the document whose **\_id** matches should be returned.

```js
  insertDocument(collection, {name: 'Dale Seo', score: 90}, id => {
    console.log('>>> Inserted:', id)

    findDocument(collection, id, doc => {
      console.log('>>> Found:', doc)

      db.close()
    })
  })
```

```js
$ node app.js
Connected successfully to server
>>> Inserted: 58da12943c0348a5129a1b60
>>> Found: { _id: 58da12943c0348a5129a1b60, name: 'Dale Seo', score: 90 }
```

## Update a Document

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

```js
  insertDocument(collection, {name: 'Dale Seo', score: 90}, id => {
    console.log('>>> Inserted:', id)

    findDocument(collection, id, doc => {
      console.log('>>> Found:', doc)

      updateDocument(collection, id, {score: 10}, _ => {
        console.log(">>> Updated")

        db.close()
      })
    })
  })
```

```js
$ node app.js
Connected successfully to server
>>> Inserted: 58da1349433337a6b7e15037
>>> Found: { _id: 58da1349433337a6b7e15037, name: 'Dale Seo', score: 90 }
>>> Updated
```

## Remove a Document {#remove-a-document}

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

```js
  insertDocument(collection, {name: 'Dale Seo', score: 90}, id => {
    console.log('>>> Inserted:', id)

    findDocument(collection, id, doc => {
      console.log('>>> Found:', doc)

      updateDocument(collection, id, {score: 10}, _ => {
        console.log(">>> Updated")

        removeDocument(collection, id, _ => {
          console.log(">>> Removed")
          db.close()
        })
      })
    })
  })
```

```js
$ node app.js
Connected successfully to server
>>> Inserted: 58da13ec0ec043a83ff960ab
>>> Found: { _id: 58da13ec0ec043a83ff960ab, name: 'Dale Seo', score: 90 }
>>> Updated
>>> Removed
```

## Reference

* [MongoDB Node.JS Driver](http://mongodb.github.io/node-mongodb-native/)



