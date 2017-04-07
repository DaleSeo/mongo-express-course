const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const requestTimer = function (req, res, next) {
  req.requestTime = Date()
  next()
}

app.use(myLogger)
app.use(requestTimer)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/time', (req, res) => {
  res.send('Request at: ' + req.requestTime)
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000...')
})
