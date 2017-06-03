# MongoDB Indexes

## Why to Create Indexes?

Indexes support the efficient execution of queries in MongoDB. 

Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. 

If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.

## What are Indexes?

Indexes are special data structures that store a small portion of the collection’s data set in an easy to traverse form. 

The index stores the value of a specific field or set of fields, ordered by the value of the field. 

The ordering of the index entries supports efficient equality matches and range-based query operations. 

In addition, MongoDB can return sorted results by using the ordering in the index.

## How Indexes work?

The following diagram illustrates a query that selects and orders the matching documents using an index:

![](/assets/index-for-sort.bakedsvg.svg)Fundamentally, indexes in MongoDB are similar to indexes in other database systems. 

MongoDB defines indexes at the collection level and supports indexes on any field or sub-field of the documents in a MongoDB collection.



## Creating Unique Indexes

Check the current indexes. There is only the default index on the `_id` field.

```js
$ db.users.getIndexes()
[
    {
        "v" : 1,
        "key" : {
            "_id" : 1
        },
        "name" : "_id_",
        "ns" : "blog.users"
    }
]
```

Create a new unique index on the `email` field.

```js
$ db.users.createIndex( { "email": 1 }, { unique: true } )
{
    "ok" : 0,
    "errmsg" : "E11000 duplicate key error index: blog.users.$email_1 dup key: { : \"a@b.c\" }",
    "code" : 11000
}
```

Remove all the users with the duplicate email.

```js
$ db.users.find( { email: 'a@b.c' } )
{ "_id" : ObjectId("592922d3c782e049447fa102"), "name" : "test", "email" : "a@b.c", "password" : "1234" }
{ "_id" : ObjectId("593202d466f12c3d668b3f38"), "name" : "test1", "email" : "a@b.c", "password" : "1234" }
{ "_id" : ObjectId("593202d566f12c3d668b3f39"), "name" : "test2", "email" : "a@b.c", "password" : "1234" }
$ db.users.remove( { email: 'a@b.c' } )
WriteResult({ "nRemoveCeate the new index again.
```

Create the new index again.

```js
$ db.users.createIndex( { "email": 1 }, { unique: true } )
{
    "createdCollectionAutomatically" : false,
    "numIndexesBefore" : 1,
    "numIndexesAfter" : 2,
    "ok" : 1
}
```

Check the current indexes again. Now, we can find another index.

```js
$ db.users.getIndexes()
[
    {
        "v" : 1,
        "key" : {
            "_id" : 1
        },
        "name" : "_id_",
        "ns" : "blog.users"
    },
    {
        "v" : 1,
        "unique" : true,
        "key" : {
            "email" : 1
        },
        "name" : "email_1",
        "ns" : "blog.users"
    }
]
```

## Reference

* [https://docs.mongodb.com/manual/indexes/](https://docs.mongodb.com/manual/indexes/)
* [https://docs.mongodb.com/manual/core/index-unique/](https://docs.mongodb.com/manual/core/index-unique/)



