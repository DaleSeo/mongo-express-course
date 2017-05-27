const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const userSvc = require('./services/userSvc')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/uploads')))
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
  userSvc.list({}, (err, users) => {
    console.log('users:', users)
    res.render('index', {users: users})
  })
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
  userSvc.create(user, (err, id) => {
    res.redirect('/users/' + id)
  })
})

app.get('/users/:id', (req, res) => {
  userSvc.detail(req.params.id, (err, user) => {
    res.render('view', {user: user})
  })
})

app.get('/users/:id/edit', (req, res) => {
  userSvc.detail(req.params.id, (err, user) => {
    res.render('edit', {user: user})
  })
})

app.post('/users/:id/edit', (req, res) => {
  userSvc.modify(req.params.id, req.body, (err, success) => {
    res.redirect('/users/' + req.params.id)
  })
})

app.get('/users/:id/del', (req, res) => {
  userSvc.remove(req.params.id, (err, success) => {
    if (success) {
      res.redirect('/users')
    } else {
      res.redirect('/users/' + req.params.id)
    }
  })
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
  res.sendFile(path.join(__dirname, file.path))
})

app.get('/signup', (req, res) => {
  res.render('signup', { error: ''} )
})

app.post('/signup', (req, res) => {
  console.log('#req.body:', req.body)
  if (!req.body.name || !req.body.email || !req.body.password || !req.body.confirmPassword) {
    res.render('signup', { error: 'Something is missing' })
  }
  if (req.body.password !== req.body.confirmPassword) {
    res.render('signup', { error: 'Password doesn\'t match' })
  }
  userSvc.create(req.body, (err, id) => {
    res.redirect('/')
  })
})

app.listen(3000, _ => {
  console.log('Express is listening at port 3000')
})
