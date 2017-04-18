const mongo = require('mongoskin')
const db = mongo.db('mongodb://localhost:27017/ltcs')
db.bind('users')

exports.list = function (callback) {
  db.users.find().toArray((err, docs) => {
    if (err) return console.error('Failed to find documents from DB', err)
    callback(docs)
  })
}

exports.detail = function (id, callback) {
  db.users.findById(id, (err, doc) => {
    if (err) return console.error('Failed to find the document from DB', err)
    callback(doc)
  })
}

exports.create = function (user, callback) {
  db.users.insertOne(user, (err, res) => {
    if (err) return console.error('Failed to insert a document into DB', err)
    if (res.result.n !== 1) return console.error('No data inserted')
    callback(res.ops[0]._id)
  })
}

exports.modify = function (id, user, callback) {
  db.users.updateById(id, {$set: user}, (err, res) => {
    if (err) return console.error('Failed to update the document onto DB', err)
    if (res.n !== 1) return console.error('No data updated')
    callback()
  })
}

exports.remove = function (id, callback) {
  db.users.removeById(id, (err, res) => {
    if (err) return console.error('Failed to remove the document from DB', err)
    if (res !== 1) return console.error('No data deleted')
    callback()
  })
}
