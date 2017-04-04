# ExpressJS Setup

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

Now install **Express** in the `myapp` directory and save it in the dependencies list.

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

