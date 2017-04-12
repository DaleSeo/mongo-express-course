const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Get a GET request')
  } else if (req.url === '/' && req.method === 'POST') {
    res.end('Got a POST request')
  } else if (req.url === '/user' && req.method === 'PUT') {
    res.end('Got a PUT request at /user')
  } else if (req.url === '/user' && req.method === 'DELETE') {
    res.end('Got a DELETE request at /user')
  }else if (req.url === '/hello') {
    let filePath = path.join(__dirname, 'public', 'hello.html')
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Failed to read file!')
      } else {
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('Sorry Can\'t find that!')
  }
})

server.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
