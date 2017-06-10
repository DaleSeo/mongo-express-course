# ExpressJS Cookie & Session

> Where to keep user authentication data?

## Cookie

Install the package.

```js
$ npm install --save cookie-parser
```

Use `cooki-parser` as a middleware.

```js
const cookieParser = require('cookie-parser')

app.use(cookieParser())
```

Set a cookie on the **response**.

```js
res.cookie('user', { email: 'a@b.c', password: '1234' })
```

Clear a cookie from the **response**.

```js
res.clearCookie('user')
```

Get cookies from the request.

```js
req.cookies.user
```

## Session

Install the package.

```js
$ npm install --save express-session
```

Use `express-session` as a middleware.

```js
const session = require('express-session')

app.use(session({
  secret: 'e0e51ad0-f712-4b0c-a56d-73642d1ed279',
  resave: true,
  saveUninitialized: true
}))
```

Set a session on the request.

```js
req.session.user = { email: 'a@b.c', password: '1234' }
```

Destory the session from the request.

```js
req.session.destroy(err => {
  // do something afterward
})
```

Get cookies from request.

```js
req.session.user
```

## Reference

* [http://expressjs.com/en/4x/api.html\#req.cookies](http://expressjs.com/en/4x/api.html#req.cookies)
* [http://expressjs.com/en/4x/api.html\#res.cookie](http://expressjs.com/en/4x/api.html#res.cookie)
* [https://www.npmjs.com/package/cookie-parse](https://www.npmjs.com/package/cookie-parser)
* [https://www.npmjs.com/package/express-session](https://www.npmjs.com/package/express-session)



