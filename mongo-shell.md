# MongoDB Shell

> Let's perform the simple CRUD operations on MongoDB Shell!

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

## Create Data

You can use the `insert()` method to add documents to a collection in MongoDB.

```js
> db.students.insert({"name": 'Dale Seo', "score": 90})
```

The method returns a `WriteResult` object with the status of the operation.

```js
WriteResult({ "nInserted" : 1 })
```

If the document passed to the `insert()` method does not contain the `_id` field, the `mongo` shell automatically adds the field to the document and sets the field’s value to a generated ObjectId.

## Read Data

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

## Update Data

### Update Specific Fields

You can use the `update()` method to update documents of a collection. The method accepts as its parameters:

* a filter document to match the documents to update,
* an update document to specify the modification to perform, and
* an options parameter \(optional\).

```js
> db.students.update({"name": "Benjamin Sadick"}, {$set: {"score": 80}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

For a complete list of the operators, see [update operators](https://docs.mongodb.com/manual/reference/operator/update/).

### Replace a Document

To replace the **entire** document except for the `_id` field, pass an entirely new document as the second argument to the `update()` method.

```js
> db.students.update({"_id": ObjectId("58d88aec8c6903129f8fe4c6")}, {"name": "박재민", "score": 100})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

> **Important: After the update, the document only contains the field or fields in the replacement document.**

## Remove Data

You can use the `remove()` method to remove documents from a collection.

The method takes a conditions document that determines the documents to remove.

### Remove Documents That Match a Condition

The following operation removes all documents that match the specified condition.

```js
> db.students.remove({"name": "박재민"})
WriteResult({ "nRemoved" : 1 })
```

### Remove All Documents

To remove all documents from a collection, pass an empty conditions document `{}` to the `remove()` method.

```js
> db.students.remove({})
```

The remove all operation only removes the documents from the collection.

The collection itself, as well as any indexes for the collection, remain.

### Drop a Collection

Use the `drop()` method to drop a collection, including any indexes.

```js
> db.students.drop()
true
```

## Reference

* [Mongo Shell Quick Reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
* [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)
* [Update Operators](https://docs.mongodb.com/manual/reference/operator/update/)



