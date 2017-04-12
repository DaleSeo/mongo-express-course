/**
 * Data migration from a csv file to MOngoDB
 */
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'

fs.readFile('users.csv', 'utf-8', (err, data) => {
  if (err) return console.error('Failed to read the file.', err)
  let lines = data.trim().split('\n')
  let headers = lines[0].split(',')
  console.log('headers:', headers)
  let records = lines.slice(1)
    .map(line => line.split(','))
    .map(cells => {
      let obj = {}
      headers.forEach((val, idx) => {
        obj[val] = cells[idx]
      })
      return obj
    })
  console.log('records:', JSON.stringify(records, null, 2))

  MongoClient.connect(url, (err, db) => {
    if (err) return console.error('Failed to connect to the MongoDB.', err)
    db.collection('users2').insertMany(records, (err, result) => {
      if (err) return console.error('Failed to insert into t{he MongoDB.', err)
      console.log('Successfully inserted.')
      console.log('The number of data inserted:' + result.result.n)
      db.close()
    })
  })
})
