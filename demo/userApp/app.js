const express = require('express')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('common'))

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, _ => {
  console.log('Express is listening at port 3000')
})
