const service = require('./userDbService')

let user = {
  name: 'Average Joe',
  role: 'Guest',
  email: 'average.joe@gmail.com',
  score: '20',
  img: 'guest.jpg'
}

service.list(docs => {
  console.log(docs)
})

service.create(user, id => {
  service.detail(id, doc => {
    console.log(doc)
    doc.score = 30
    service.modify(id, doc, _ => {
      service.remove(id, _ => {
        console.log('Finished')
      })
    })
  })
})
