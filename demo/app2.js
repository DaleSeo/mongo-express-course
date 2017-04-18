const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Date:' + new Date())
  next()
})

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url)
  next()
})

app.get('/hello', (req, res) => {
  res.send('Hello')
})

app.get('/world', (req, res) => {
  res.send('World')
})

app.listen(3000, _ => {
  console.log('Express listening on port 3000')
})
