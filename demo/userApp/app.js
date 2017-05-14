const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

const app = express()

const users = [
  {
    "_id": "1",
    "name": "Dale Seo",
    "role": "Instructor",
    "email": "dale.seo@gmail.com",
    "score": 90,
    "img": "dale.jpg"
  },
  {
    "_id": "2",
    "name": "Benjamin Sadick",
    "role": "Coach",
    "email": "bsadick@gmail.com",
    "score": 80,
    "img": "ben.jpg"
  },
  {
    "_id": "3",
    "name": "Nate Lipp",
    "role": "Coach",
    "email": "nateplipp@gmail.com",
    "score": 80,
    "img": "nate.jpg"
  },
  {
    "_id": "4",
    "name": "Jiyeon Lee",
    "role": "Student",
    "email": "jiyeon.lee@gmail.com",
    "score": 60,
    "img": "user.png"
  },
  {
    "_id": "5",
    "name": "Michael Vogl",
    "role": "Student",
    "email": "michael.vogl@gmail.com",
    "score": 70,
    "img": "user.png"
  },
  {
    "_id": "6",
    "name": "Jongil Park",
    "role": "Guest",
    "email": "jongil.park@gmail.com",
    "score": 100,
    "img": "guest.png"
  }
]

let sequence = 7

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/public')))
app.use(logger('common'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello, Express!!!!!!!!!!!')
})

app.get('/test', (req, res) => {
  res.send('<h1>How dare you test me like this!</h1>')
})

app.post('/test', (req, res) => {
  res.send(req.body)
})

app.get('/users', (req, res) => {
  res.render('index', {users: users})
})

app.get('/users/add', (req, res) => {
  let newUser = {
    "name": "",
    "role": "Guest",
    "email": "guest@test.com",
    "score": 0,
    "img": "guest.png"
  }
  res.render('edit', {user: newUser})
})

app.post('/users/add', (req, res) => {
  let user = req.body
  user._id = String(sequence++)
  users.push(user)
  res.redirect('/users/' + user._id)
})

app.get('/users/:id', (req, res) => {
  let user = users.filter(user => user._id === req.params.id)[0]
  res.render('view', {user: user})
})

app.get('/users/:id/edit', (req, res) => {
  let user = users.filter(user => user._id === req.params.id)[0]
  res.render('edit', {user: user})
})

app.post('/users/:id/edit', (req, res) => {
  for (let i in users) {
    if (users[i]._id === req.params.id) {
      req.body._id = req.params.id
      users[i] = req.body
    }
  }
  res.redirect('/users/' + req.params.id)
})

app.get('/users/:id/del', (req, res) => {
  for (let i in users) {
    if (users[i]._id === req.params.id) {
      users.splice(i, 1)
    }
  }
  res.redirect('/users')
})

let file = null

app.post('/upload', upload.single('photo'), (req, res) => {
  console.log(req.body)
  console.log(req.file)
  file = req.file
  res.send('Uploaded!')
})

app.get('/photo', (req, res) => {
  res.set('Content-type', file.mimetype)
  res.end(file.buffer)
})

app.listen(3000, _ => {
  console.log('Express is listening at port 3000')
})
