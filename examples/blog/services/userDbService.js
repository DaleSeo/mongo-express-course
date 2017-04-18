// const MongoClient = require('mongodb').MongoClient
const mongo = require('mongoskin')
const db = mongo.db('mongodb://localhost:27017/ltcs', {native_parser:true})
db.bind('users')

exports.list = function () {
  // return new Promise((resolve, reject) => {
  //   .toArray()
  //     .then(docs => {
  //       resolve(docs)
  //     })
  // })

  // return new Promise((resolve, reject) => {
  //   MongoClient.connect('mongodb://localhost:27017/ltcs')
  //     .then(db => {
  //       db.collection('users').find().toArray()
  //         .then(docs => {
  //           resolve(docs)
  //         })
  //     })
  // })
}

exports.detail = function (id) {
  db.users.findById(id).then(_ => console.log('123'))
}

exports.create = function (user) {
  user._id = String(sequence)
  user.img = 'guest.png'
  users.push(user)
  sequence++
}

exports.modify = function (id, user) {
  for (let i in users) {
    if (users[i]._id === id) {
      users[i] = user
    }
  }
}

exports.remove = function (id) {
  for (let i in users) {
    if (users[i]._id === id) {
      return users.splice(i, 1)
    }
  }
}
