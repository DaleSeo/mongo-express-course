# Express View

## Template Engine

A _template engine _enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

To render template files, set the following [application setting properties](http://expressjs.com/en/4x/api.html#app.set), set in `app.js`:

* `views` : the directory where the template files are located. Eg, this defaults to the `views` directory in the application root directory.

```js
app.set('views', './views')
```

* `view engine` : the template engine to use. For example, to use the Pug template engine:

```js
app.set('view engine', 'pug')
```

## Twitter Hogan

The Consolidate.js library follows this convention by mapping all of the popular Node.js template engines, and therefore works seamlessly within Express.

```bash
$ npm install --save consolidate
```

Install hogan.

```bash
$ npm install --save hogan
```

Require Consolidate and registers the Hogan template engine as 'html'.

```js
const cons = require('consolidate')

app.engine('html', cons.hogan)
app.set('view engine', 'html')
```



## Reference

* [http://expressjs.com/en/guide/using-template-engines.html](http://expressjs.com/en/guide/using-template-engines.html)
* [https://www.npmjs.com/package/consolidate](https://www.npmjs.com/package/consolidate)
* [http://twitter.github.io/hogan.js/](http://twitter.github.io/hogan.js/)



