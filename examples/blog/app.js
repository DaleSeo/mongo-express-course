const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

app.get('/test', (req, res) => {
  res.send('<h1>How dare you test me like this!</h1>')
})

app.listen(3000, () => {
  console.log('Express server running on port 3000')
})
