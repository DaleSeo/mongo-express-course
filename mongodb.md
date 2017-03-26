# MongoDB

## Installation

* Mac

```bash
$ brew install mongodb
```

* Windows

  * Go to [https://www.mongodb.com/download-center\#community](#)

  * Download Community Server

## Run Mongo Daemon

Open a terminal

```bash
$ mongod
2017-03-26T12:27:29.123+0900 I CONTROL  [initandlisten] MongoDB starting : pid=19382 port=27017 dbpath=/data/db 64-bit host=linux
2017-03-26T12:27:29.123+0900 I CONTROL  [initandlisten] db version v3.4.2
(...)
2017-03-26T12:27:29.474+0900 I NETWORK  [thread1] waiting for connections on port 27017
```

## Run Mongo Shell

Open another terminal

```bash
$ mongo
MongoDB shell version v3.4.2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.2
>
```

## Play with Mongo Shell

### manual

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



