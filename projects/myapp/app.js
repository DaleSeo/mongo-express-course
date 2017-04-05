const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Get a GET request')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.get('/error', (req, res) => {
  throw new Error('My error!')
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Someting broke!')
})

app.use((req, res, next) => {
  res.status(404).send('Sorry Can\'t find that!')
})

app.listen(3000, _ => {
  console.log('Server listening on port 3000!')
})
