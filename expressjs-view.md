# ExpressJS View

## Template Engine

A \_template engine \_enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

To render template files, set the following [application setting properties](http://expressjs.com/en/4x/api.html#app.set), set in `app.js`:

* `views` : the directory where the template files are located. Eg, this defaults to the `views` directory in the application root directory.

```js
app.set('views', './views')
```

* `view engine` : the template engine to use. For example, to use the Pug template engine:

```js
app.set('view engine', 'pug')
```

## EJS

Embedded JavaScript templates / Effective JavaScript templating

Install EJS.

```bash
$ npm install --save ejs
```

Require Consolidate and registers the Hogan template engine as 'html'.

```js
app.set('view engine', 'ejs')
```

You can embed JavaScript code in the middle of HTML without `<scirpt>` tag

```html
<ul>
  <% users.forEach(function(user) { %>
    <li><%=user.name%></li>
  <% } %>
</ul>
```

## PUG \(Jade\)

```js
app.set('view engine', 'pug')
```

## Reference

* [http://expressjs.com/en/guide/using-template-engines.html](http://expressjs.com/en/guide/using-template-engines.html)
* [http://ejs.co](http://ejs.co)
* [https://pugjs.org/](https://pugjs.org/)



