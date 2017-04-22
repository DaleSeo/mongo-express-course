let users = require('../data/users.json')
let sequence = 7

exports.list = function (callback) {
  callback(users)
}

exports.detail = function (id, callback) {
  for (let user of users) {
    if (user._id === id) {
      callback(user)
      break
    }
  }
}

exports.create = function (user, callback) {
  user._id = String(sequence)
  users.push(user)
  sequence++
  callback(user._id)
}

exports.modify = function (id, user, callback) {
  for (let i in users) {
    if (users[i]._id === id) {
      users[i] = user
      break
    }
  }
  callback()
}

exports.remove = function (id, callback) {
  for (let i in users) {
    if (users[i]._id === id) {
      users.splice(i, 1)
      break
    }
  }
  callback()
}
