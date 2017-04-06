# ExpressJS Basics2

## Route parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

```js
app.get('/users/:userId/books/:bookId', function (req, res) {
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

  




