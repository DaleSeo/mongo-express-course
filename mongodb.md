# MongoDB

## Introduction

MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.

MongoDB obviates the need for an Object Relational Mapping \(ORM\) to facilitate development.

## Documents

A record in MongoDB is a document, which is a data structure composed of field and value pairs. 

MongoDB documents are similar to JSON objects. 

The values of fields may include other documents, arrays, and arrays of documents.

```js
{
   "_id" : ObjectId("54c955492b7c8eb21818bd09"),
   "address" : {
      "street" : "2 Avenue",
      "zipcode" : "10075",
      "building" : "1480",
      "coord" : [ -73.9557413, 40.7720266 ]
   },
   "borough" : "Manhattan",
   "cuisine" : "Italian",
   "grades" : [
      {
         "date" : ISODate("2014-10-01T00:00:00Z"),
         "grade" : "A",
         "score" : 11
      },
      {
         "date" : ISODate("2014-01-16T00:00:00Z"),
         "grade" : "B",
         "score" : 17
      }
   ],
   "name" : "Vella",
   "restaurant_id" : "41704620"
}
```

## Collections

MongoDB stores documents in collections. 

Collections are analogous to tables in relational databases. 

Unlike a table, however, a collection does not require its documents to have the same schema.

In MongoDB, documents stored in a collection must have a unique \_id field that acts as a primary key.

## Installation

* Mac

```bash
$ brew install mongodb
```

* Windows

  * Go to [https://www.mongodb.com/download-center\#community](#)

  * Download Community Server

  * See [https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-windows/](https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-windows/) for help

## Run Mongo Daemon

To run MongoDB, run the `mongod` process at the termial.

```bash
$ mongod
2017-03-26T12:27:29.123+0900 I CONTROL  [initandlisten] MongoDB starting : pid=19382 port=27017 dbpath=/data/db 64-bit host=linux
2017-03-26T12:27:29.123+0900 I CONTROL  [initandlisten] db version v3.4.2
(...)
2017-03-26T12:27:29.474+0900 I NETWORK  [thread1] waiting for connections on port 27017
```

## Run Mongo Shell

The mongo shell is an interactive JavaScript interface to MongoDB and is a component of the MongoDB package. 

You can use the mongo shell to query and update data as well as perform administrative operations.

```bash
$ mongo
MongoDB shell version v3.4.2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.2
>
```

## Import Example Dataset

The examples in this guide use the restaurants collection in the test database. 

The following is a sample document in the restaurants collection:

```js
{
  "address": {
     "building": "1007",
     "coord": [ -73.856077, 40.848447 ],
     "street": "Morris Park Ave",
     "zipcode": "10462"
  },
  "borough": "Bronx",
  "cuisine": "Bakery",
  "grades": [
     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
  ],
  "name": "Morris Park Bake Shop",
  "restaurant_id": "30075445"
}
```

Use the following procedure to populate the restaurants collection.

### Retrieve the restaurants data.

Retrieve the dataset from [https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json](https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json) and save to a file named primer-dataset.json.

### Import data into the collection.

In the system shell or command prompt, use`mongoimport`to insert the documents into the`restaurants`collection in the`test`database. 

If the collection already exists in the`test`database, the operation will **drop **the`restaurants`collection first.

```bash
$ mongoimport --db test --collection restaurants --drop --file primer-dataset.json
2017-03-27T11:59:40.367+0900	connected to: localhost
2017-03-27T11:59:40.368+0900	dropping: test.restaurants
2017-03-27T11:59:41.165+0900	imported 25359 documents
```

## Play with Mongo Shell

### Show a list of available commands

```bash
> help
    db.help()                    help on db methods
    db.mycoll.help()             help on collection methods
    sh.help()                    sharding helpers
    rs.help()                    replica set helpers
    help admin                   administrative help
    help connect                 connecting to a db help
    help keys                    key shortcuts
    help misc                    misc things to know
    help mr                      mapreduce

    show dbs                     show database names
    show collections             show collections in current database
    show users                   show users in current database
    show profile                 show most recent system.profile entries with time >= 1ms
    show logs                    show the accessible logger names
    show log [name]              prints out the last segment of log in memory, 'global' is default
    use <db_name>                set current database
    db.foo.find()                list objects in collection foo
    db.foo.find( { a : 1 } )     list objects in foo where a == 1
    it                           result of the last line evaluated; use to further iterate
    DBQuery.shellBatchSize = x   set default number of items to display on shell
    exit                         quit the mongo shell
```

### List up the databases

```bash
> show dbs
admin  0.000GB
local  0.000GB
```

### Use a database

```bash
> use test
switched to db test
```

### Create a document

```bash
> db.users.insert({name: 'Dale Seo'})
WriteResult({ "nInserted" : 1 })
```

### Read the documents

```bash
> db.users.find()
{ "_id" : ObjectId("58d737d98754ca3d8b1c79bf"), "name" : "Dale Seo" }
```

### Delete the documents

```bash
db.users.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
```

## Reference

* [https://docs.mongodb.com/getting-started/shell/](https://docs.mongodb.com/getting-started/shell/)



