let users = require('../data/users.json')
let sequence = 7

exports.list = function () {
  return users
}

exports.detail = function (id) {
  for (let user of users) {
    if (user._id === id) {
      return user
    }
  }
}

exports.create = function (user) {
  user._id = String(sequence)
  users.push(user)
  sequence++
  return user._id
}

exports.modify = function (id, user) {
  for (let i in users) {
    if (users[i]._id === id) {
      users[i] = user
      break
    }
  }
}

exports.remove = function (id) {
  for (let i in users) {
    if (users[i]._id === id) {
      users.splice(i, 1)
      break
    }
  }
}
