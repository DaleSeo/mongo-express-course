const express = require('express')
const logger = require('morgan')
const path = require('path')
const cons = require('consolidate')

const app = express()

// View Engine Setup
app.engine('html', cons.mustache)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/users/:no', (req, res) => {
  res.send('Hello, User #' + req.params.no)
})

app.get('/users', (req, res) => {
  let users = [
    {name: 'Dale Seo 2'},
    {name: 'Benjamin Sadick'},
    {name: 'Nate Lipp'}
  ]
  res.render('list', {users: users})
})

app.listen(3000, _ => {
  console.log('Express is listening at port 3000')
})
