let users = require('../data/users.json')
let sequence = 6

exports.list = function () {
  return users
}

exports.detail = function (id) {
  for (let u of users) {
    if (u._id === id) {
      return u
    }
  }
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
