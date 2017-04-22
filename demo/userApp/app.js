const express = require('express')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('common'))

app.get('/', (req, res) => {
  res.send('Hello, Express!')
})

app.get('/test', (req, res) => {
  res.send('<h1>How dare you test me like this!</h1>')
})

app.listen(3000, _ => {
  console.log('Express is listening at port 3000')
})
