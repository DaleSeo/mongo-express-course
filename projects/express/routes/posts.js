const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date())
  next()
})

router.route('/')
  .get((req, res) => {
    res.send('GET /posts')
  })
  .post((req, res) => {
    res.send('POST /posts')
  })
  .put((req, res) => {
    res.send('PUT /posts')
  })
  .delete((req, res) => {
    res.send('DELETE /posts')
  })

module.exports = router
