const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const MONGODB_URI = 'mongodb://localhost:27017/blog'

let userCollection

function list(query, cb) {
  getUserCollection(coll => {
    coll.find(query).toArray((err, users) => {
      cb(err, users)
    })
  })
}

function create(user, cb) {
  getUserCollection(coll => {
    coll.insertOne(user, (err, res) => {
      cb(err, res.ops[0]._id)
    })
  })
}

function detail(id, cb) {
  getUserCollection(coll => {
    coll.findOne({_id: ObjectID(id)}, (err, user) => {
      cb(err, user)
    })
  })
}

function remove(id, cb) {
  getUserCollection(coll => {
    coll.removeOne({_id: ObjectID(id)}, (err, res) => {
      if (res.result.n === 1) {
        cb(err, true)
      } else {
        cb(err, false)
      }
    })
  })
}

function modify(id, user, cb) {
  getUserCollection(coll => {
    coll.updateOne({_id: ObjectID(id)}, {$set: user},(err, res) => {
      if (res.result.n === 1) {
        cb(err, true)
      } else {
        cb(err, false)
      }
    })
  })
}

function getUserCollection(cb) {
  MongoClient.connect(MONGODB_URI, (err, db) => {
    let userCollection = db.collection('users')
    cb(userCollection)
  })
}

module.exports = {
  list, create, detail, remove, modify
}
