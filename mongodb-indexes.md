# MongoDB Indexes

## Creating Unique Indexes

Check the current indexes. There is only the default index on the `_id` property.

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

Create a new unique index on the `email` property.

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



