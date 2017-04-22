const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const userService = require('./services/userMemSyncService')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('common'))

const newUser = {
  'name': '',
  'role': 'Guest',
  'email': '',
  'score': 0,
  'img': 'guest.png'
}

app.get('/test', (req, res) => {
  res.send('<h1>How dare you test me like this!</h1>')
})

app.get('/users', (req, res) => {
  let users = userService.list()
  res.render('list', {users: users})
})

app.get('/users/add', (req, res) => {
  res.render('edit', {user: newUser})
})

app.post('/users/add', (req, res) => {
  let id = userService.create(req.body)
  res.redirect(id + '/view')
})

app.get('/users/:id/view', (req, res) => {
  let user = userService.detail(req.params.id)
  res.render('view', {user: user})
})

app.get('/users/:id/del', (req, res) => {
  userService.remove(req.params.id)
  res.redirect('/users')
})

app.get('/users/:id/edit', (req, res) => {
  let user = userService.detail(req.params.id)
  res.render('edit', {user: user})
})

app.post('/users/:id/edit', (req, res) => {
  userService.modify(req.params.id, req.body)
  res.redirect('./view')
})

app.listen(3000, () => {
  console.log('Express server running on port 3000')
})
