const http = require('http')
const fs = require('fs')

const server = http.createServer()

const users = [
  {id: '1', name: 'Dale', score: 90},
  {id: '2', name: 'Nate', score: 50},
  {id: '3', name: 'Ben', score: 70}
]

server.on('request', (req, res) => {
  console.log(req.method + ' ' + req.url)
  res.setHeader('Content-type', 'text/html')
  if (req.url === '/users') {
    let html = ''
    users.forEach(user => {
      html += '<li>' + user.name + ', '+ user.score + '</li>'
    })
    res.write(html)
    res.end()
  } else if (/\/users\/.+/.test(req.url)) {
    let id = req.url.match(/\/users\/(.+)/)[1]
    let user = users.filter(user => {
      return user.id === id
    })
    res.write(`<h3>${user[0].name}, ${user[0].score}</h3>`)
    res.end()
  } else if (req.url === '/world') {
    res.write('<h2>World</h2>')
    res.end()
  } else if (req.url === '/apple') {
    res.setHeader('Content-type', 'image/png')
    fs.readFile('./public/apple.png', (err, data) => {
      res.write(data)
      res.end()
    })
  } else {
    res.write('<h1>No idea</h1> ')
    res.end()
  }
})

server.listen(3000, _ => {
  console.log('Server listening at port 3000')
})
