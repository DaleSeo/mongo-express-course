const mongo = require('mongoskin')
const db = mongo.db('mongodb://localhost:27017/ltcs')
db.bind('users')

exports.list = function () {
  return new Promise((resolve, reject) => {
    db.users.find().toArray((err, docs) => {
      if (err) return reject(err)
      resolve(docs)
    })
  })
}

exports.detail = function (id) {
  return new Promise((resolve, reject) => {
    db.users.findById(id, (err, doc) => {
      if (err) return reject(err)
      resolve(doc)
    })
  })
}

exports.create = function (user) {
  return new Promise((resolve, reject) => {
    db.users.insertOne(user, (err, res) => {
      if (err) return reject(err)
      resolve(res.ops[0]._id)
    })
  })
}

exports.modify = function (id, user) {
  return new Promise((resolve, reject) => {
    db.users.updateById(id, {$set: user}, (err, res) => {
      if (err) return reject(err)
      if (res.n !== 1) return reject(new Error('No data updated'))
      resolve()
    })
  })
}

exports.remove = function (id) {
  return new Promise((resolve, reject) => {
    db.users.removeById(id, (err, res) => {
      if (err) return reject(err)
      if (res !== 1) return reject(new Error('No data updated'))
      resolve()
    })
  })
}
