const userSvc = require('./userSvc')

let password = 'ABC123'
userSvc.genHash(password, (err, hash) => {
  console.log(password + '===>' + hash)
})
