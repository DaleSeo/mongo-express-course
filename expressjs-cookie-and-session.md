# ExpressJS Cookie & Session

> Where to keep user authentication data?

## Cookie

Install

```js
$ npm install --save cookie-parser
```

Use `cooki-parser` as a middleware

```js
const cookieParser = require('cookie-parser')
 
app.use(cookieParser())
```

## Session

Install

```js
$ npm install --save express-session
```

Use `express-session` as a middleware

```js
const session = require('express-session')

app.use(session({
  secret: 'e0e51ad0-f712-4b0c-a56d-73642d1ed279',
  resave: true,
  saveUninitialized: true
}))
```

## Reference

* [https://www.npmjs.com/package/cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [https://www.npmjs.com/package/express-session](https://www.npmjs.com/package/express-session)



