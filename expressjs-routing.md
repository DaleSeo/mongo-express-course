# ExpressJS Routing

## Route parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

```js
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```

## Response methods {#response-methods}

The methods on the response object \(`res`\) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

| Method | Description |
| :--- | :--- |
| [res.download\(\)](http://expressjs.com/en/4x/api.html#res.download) | Prompt a file to be downloaded. |
| [res.end\(\)](http://expressjs.com/en/4x/api.html#res.end) | End the response process. |
| [res.json\(\)](http://expressjs.com/en/4x/api.html#res.json) | Send a JSON response. |
| [res.jsonp\(\)](http://expressjs.com/en/4x/api.html#res.jsonp) | Send a JSON response with JSONP support. |
| [res.redirect\(\)](http://expressjs.com/en/4x/api.html#res.redirect) | Redirect a request. |
| [res.render\(\)](http://expressjs.com/en/4x/api.html#res.render) | Render a view template. |
| [res.send\(\)](http://expressjs.com/en/4x/api.html#res.send) | Send a response of various types. |
| [res.sendFile\(\)](http://expressjs.com/en/4x/api.html#res.sendFile) | Send a file as an octet stream. |
| [res.sendStatus\(\)](http://expressjs.com/en/4x/api.html#res.sendStatus) | Set the response status code and send its string representation as the response body. |

## app.route\(\) {#app-route}

You can create chainable route handlers for a route path by using `app.route()`. Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos.

Here is an example of chained route handlers that are defined by using `app.route()`.

```js
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
```

Use the`express.Router`class to create modular, mountable route handlers. A`Router`instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

Create a router file named`birds.js`in the app directory, with the following content:

```js
var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router
```

Then, load the router module in the app:

```js
var birds = require('./birds')

// ...

app.use('/birds', birds)
```

The app will now be able to handle requests to`/birds`and`/birds/about`, as well as call the`timeLog`middleware function that is specific to the route.

