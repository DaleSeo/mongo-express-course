# MongoDB Setup

> ## Let's get started with MongoDB

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

The `mongo` shell is an interactive JavaScript interface to MongoDB and is a component of the MongoDB package.

You can use the `mongo` shell to query and update data as well as perform administrative operations.

```bash
$ mongo
MongoDB shell version v3.4.2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.2
>
```

When you run `mongo` without any arguments, the `mongo` shell will attempt to connect to the MongoDB instance running on the **localhost** interface on port **27017**.

## Reference

* [Getting Started with Mongo DB](https://docs.mongodb.com/getting-started/shell/)



