# Mongoose



Install the package.

```bash
npm install --save mongoose
```

Require it.

```js
const mongoose = require('mongoose')
```

Connect to MongoDB.

```js
mongoose.connect('mongodb://user:pass@ds139791.mlab.com:39791/ltcs-todo', err => {
  console.log('#connected to MongoDB!')
})
```

Disconnect from MongoDB.

```js
mongoose.disconnect(err => {
  console.log('#disconnected from MongoDB!')
})
```

Create a model.

```js
const Article = mongoose.model('Article', {
  title: String,
  content: String,
  tags: Array,
  updated: Date
})
```

Create an object to save.

```js
const toSave = {
  title: 'New Artilce',
  content: 'This is a new Article!',
  tags: ['HTML', 'CSS', 'JS'],
  updated: new Date()
}
```

Create a document on MongoDB.

```js
Article.create(toSave, (err, saved) => { ... })
```

Find a document on MongoDB.

```js
Article.findById(id, (err, found) => { ... })
```

Update a document on MongoDB.

```js
Article.findByIdAndUpdate(id, {content: 'This is not a new article anymore!'}, (err, found) => { ... })
```

Remove a document from MongoDB.

```js
Article.findByIdAndRemove(id, (err, found) => { ... })
```



