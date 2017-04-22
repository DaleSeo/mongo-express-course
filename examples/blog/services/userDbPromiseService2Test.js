const service = require('./userDbPromiseService2')

let user = {
  name: 'Average Joe',
  role: 'Guest',
  email: 'average.joe@gmail.com',
  score: '20',
  img: 'guest.jpg'
}

let id
service.create(user)
  .then(_id => {
    id = _id
    return service.detail(id)
  })
  .then(doc => {
    console.log(doc)
    doc.score = 30
    return service.modify(id, user)
  })
  .then(_ => service.remove(id))
  .then(_ => {
    console.log('Finished')
  })
  .catch(err => {
    console.error(err)
  })

service.list()
  .then(docs => {
    console.log(docs)
  })
