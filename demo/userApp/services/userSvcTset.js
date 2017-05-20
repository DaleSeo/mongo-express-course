const userSvc = require('./userSvc')

userSvc.list({}, (err, users) => {
  if (err) console.error('ERROR!', err)
  else console.log('USERS:', users)
})

userSvc.create({email: 'ltcs@test.com'}, (err, id) => {
  if (err) console.error('ERROR!', err)
  else console.log('ID:', id)
})

userSvc.detail('591fe83d499d9d3219888803', (err, user) => {
  if (err) console.error('ERROR!', err)
  else console.log('USER:', user)
})

userSvc.modify('591fe83d499d9d3219888803', {email: 'new@test.com'}, (err, success) => {
  if (err) console.error('ERROR!', err)
  else {
    if (success) {
      console.log('Successfully updated!')
    } else {
      console.log('Nothing updated!')
    }
  }
})

userSvc.remove('591fe83d499d9d3219888803', (err, success) => {
  if (err) console.error('ERROR!', err)
  else {
    if (success) {
      console.log('Successfully removed!')
    } else {
      console.log('Nothing removed!')
    }
  }
})
