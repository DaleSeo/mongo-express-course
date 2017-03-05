# Introduction to Express.js

## What is Express

* Fast, unopinionated, minimalist web framework for Node.js
* [http://expressjs.com](http://expressjs.com)

## Installing Express

```bash
$ npm install --save express
```

## Hello World

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});
```

## Middleware

* Middlewares provide a lot of plug-in functionalities that can be used within your Express application
* Many third-party middlewares to extend functionality
* Example: morgan for logging \([https://github.com/expressjs/morgan](https://github.com/expressjs/morgan\)\)\)

```bash
$ npm install --save morgan
```

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

## Serving Static Content

```js
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
});
```



