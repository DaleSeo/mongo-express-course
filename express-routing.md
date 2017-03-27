# Application Routes

## Application Routes

* app.all\(‘/tasks’, function\(req,res,next\) { . . . }\); 
* app.get\(‘/tasks’, function\(req,res,next\) { . . . }\); 
* app.post\(‘/tasks’, function\(req,res,next\) { . . . }\); 
* app.put\(‘/tasks’, function\(req,res,next\) { . . . }\);
* app.delete\(‘/tasks’, function\(req,res,next\) { . . . }\);

## Routes with Parameters

```js
app.get('/tasks/:id', (req, res, next) => {
  res.send('Details of the task: ' + req.params.id);
});
```

## Body Parser

* Middleware to parse the body of the message
* Parses the body of the message and popluates the `req.body` property
* [https://github.com/expressjs/body-parser](https://github.com/expressjs/body-parser)

```bash
$ npm install --save body-parser
```

```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
```

## Express Router

* a “mini-application,” capable only of perfo'rming middleware and routing functions
* useful when you modularize your web app

```js
const router = express.Router();
router.use(...);
router.get('/comments', ...);
router.post('/comments', ...);
```



