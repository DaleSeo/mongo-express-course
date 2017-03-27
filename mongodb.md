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

---

## Display a list of available commands

```js
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

## List up the databases

```js
> show dbs
admin  0.000GB
local  0.000GB
```

## Switch to a database

```js
> use test
switched to db test
```

## Create a document

You can use the `insert()` method to add documents to a collection in MongoDB.

```js
> db.students.insert({"name": 'Dale Seo', "score": 90})
```

The method returns a `WriteResult` object with the status of the operation.

```js
WriteResult({ "nInserted" : 1 })
```

If the document passed to the `insert()` method does not contain the `_id` field, the `mongo` shell automatically adds the field to the document and sets the field’s value to a generated ObjectId.

## Read the documents

You can use the `find()` method to issue a query to retrieve data from a collection in MongoDB.

### Query for All Documents in a Collection

To return all documents in a collection, call the find\(\) method without a criteria document.

```js
> db.students.find()
{ "_id" : ObjectId("58d88ab98c6903129f8fe4c4"), "name" : "Dale Seo", "score" : 90 }
{ "_id" : ObjectId("58d88ae08c6903129f8fe4c5"), "name" : "Nate Lipp", "score" : 70 }
{ "_id" : ObjectId("58d88aec8c6903129f8fe4c6"), "name" : "Benjamin Sadick", "score" : 30 }
```

Regular expressions are supported.

```js
> db.students.find({"name": /S/})
{ "_id" : ObjectId("58d88ab98c6903129f8fe4c4"), "name" : "Dale Seo", "score" : 90 }
{ "_id" : ObjectId("58d88aec8c6903129f8fe4c6"), "name" : "Benjamin Sadick", "score" : 30 }
```

### Specify Equality Conditions

The query condition for an equality match on a field has the following form:

```js
{ <field1>: <value1>, <field2>: <value2>, ... }
```

```js
> db.students.find({"name": "Dale Seo"})
{ "_id" : ObjectId("58d88ab98c6903129f8fe4c4"), "name" : "Dale Seo", "score" : 90 }
```

### Specify Conditions with Operators

The query conditions using operators generally have the following form:

```js
{ <field1>: { <operator1>: <value1> } }
```

```js
> db.students.find({"score": {$gt: 50}})
{ "_id" : ObjectId("58d88ab98c6903129f8fe4c4"), "name" : "Dale Seo", "score" : 90 }
{ "_id" : ObjectId("58d88ae08c6903129f8fe4c5"), "name" : "Nate Lipp", "score" : 70 }
```

For a complete list of the operators, see [query operators](https://docs.mongodb.com/manual/reference/operator/query/).

### Combine Conditions

You can combine multiple query conditions in logical conjunction \(AND\) and logical disjunctions \(OR\).

#### Logical AND

```js
> db.students.find({"score": {$lt: 80}, "name": /Lipp$/})
{ "_id" : ObjectId("58d88ae08c6903129f8fe4c5"), "name" : "Nate Lipp", "score" : 70 }
```

### Logical OR

```js
> db.students.find({$or: [{"name": /^Ben/}, {"name": /^Nate/}]})
{ "_id" : ObjectId("58d88ae08c6903129f8fe4c5"), "name" : "Nate Lipp", "score" : 70 }
{ "_id" : ObjectId("58d88aec8c6903129f8fe4c6"), "name" : "Benjamin Sadick", "score" : 30 }
```

### Sort Query Results

To specify an order for the result set, append the `sort()` method to the query. 

Pass to `sort()` method a document which contains the field\(s\) to sort by and the corresponding sort type, e.g. `1` for ascending and `-1` for descending.

```js
> db.students.find().sort({"score": 1})
{ "_id" : ObjectId("58d88aec8c6903129f8fe4c6"), "name" : "Benjamin Sadick", "score" : 30 }
{ "_id" : ObjectId("58d88ae08c6903129f8fe4c5"), "name" : "Nate Lipp", "score" : 70 }
{ "_id" : ObjectId("58d88ab98c6903129f8fe4c4"), "name" : "Dale Seo", "score" : 90 }
```

## Delete the documents

```bash
db.users.deleteMany({})
{ "acknowledged" : true, "deletedCount" : 1 }
```

## Reference

* [Getting Started With MongoDB](https://docs.mongodb.com/getting-started/shell/)
* [Mongo Shell Quick Reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
* [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)



