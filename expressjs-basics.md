# ExpressJS Basics

## Overview

* A NodeJS web server project
* A routing + sugar layer on top of NodeJS HTTP server
* Declarative routing
* Basic middleware pattern

## Installation

Create a directory to hold your application, and make that your working directory.

```bash
$ mkdir myapp
$ cd myapp
```

Use the `npm init` command to create a `package.json` file for your application.

```bash
$ npm init -y
```

Now install _Express_ in the `myapp` directory and save it in the dependencies list.

```bash
$ npm install --save express
```

## Hello World

In the `myapp` directory, create a file named `app.js` and add the following code:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, _ => {
  console.log('Server listening on port 3000!')
})
```

The app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL \(`/`\) or _route_. For every other path, it will respond with a **404 Not Found**.

Run the app with the following command:

```bash
$ node app.js
```

Then, load `http://localhost:3000/` in a browser to see the output.

## Basic Routing

\_Routing \_refers to determining how an application responds to a client request to a particular endpoint, which is a URI \(or path\) and a specific HTTP request method \(GET, POST, and so on\).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

```js
app.METHOD(PATH, HANDLER)
```

Where:

* `app` is an instance of `express`.
* `METHOD` is an [HTTP request method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), in lowercase.
* `PATH` is a path on the server.
* `HANDLER` is the function executed when the route is matched.

The following examples illustrate defining simple routes.

Respond with `Hello World!`on the homepage:

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

Respond to POST request on the root route \(`/`\), the application’s home page:

```js
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```

Respond to a PUT request to the`/user` route:

```js
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```

Respond to a DELETE request to the`/user`route:

```js
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```

# Serving Static files

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

Pass the absolute path of the directory that contains the static assets to the `express.static` middleware function to start serving the files directly. For example, use the following code to serve images, CSS files, and JavaScript files in a directory named `public`:

```js
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
```

Now, you can load the files that are in the `public` directory:

```
http://localhost:3000/hello.html
http://localhost:3000/css/style.css
http://localhost:3000/js/script.js
http://localhost:3000/img/logo.png
```

## Reference

* [http://expressjs.com](http://expressjs.com "http://expressjs.com")



