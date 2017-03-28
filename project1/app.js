const MongoClient = require('mongodb').MongoClient,
  assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017/test'

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  // Get the documents collection
  let collection = db.collection('students')

  insertDocument(collection, {name: 'Dale Seo', score: 90}, id => {
    console.log('>>> Inserted:', id)

    findDocument(collection, id, doc => {
      console.log('>>> Found:', doc)

      updateDocument(collection, id, {score: 10}, _ => {
        console.log(">>> Updated")

        removeDocument(collection, id, _ => {
          console.log(">>> Removed")
          db.close()
        })
      })
    })
  })
})

function insertDocument (collection, doc, callback) {
  collection.insertOne(doc, (err, result) => {
    assert.equal(null, err)
    // console.log(result)
    assert.equal(1, result.result.n)
    callback(result.ops[0]._id)
  })
}

function findDocument (collection, id, callback) {
  collection.findOne({_id: id}, (err, doc) => {
    assert.equal(null, err)
    // console.log(doc)
    assert(id.equals(doc._id))
    callback(doc)
  })
}

function updateDocument (collection, id, doc, callback) {
  collection.updateOne({_id: id}, {$set: doc}, (err, result) => {
    assert.equal(null, err)
    // console.log(result)
    assert.equal(1, result.result.n)
    callback()
  })
}

function removeDocument (collection, id, callback) {
  collection.deleteOne({_id: id}, (err, result) => {
    assert.equal(null, err)
    // console.log(result)
    assert.equal(1, result.result.n)
    callback()
  })
}
