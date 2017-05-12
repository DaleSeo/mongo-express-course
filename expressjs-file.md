# ExpressJS File

> You can upload multimedia files such as photos, music and videos to the servers.

# HTML &lt;form&gt; enctype Attribute

The `enctype` attribute specifies how the form-data should be encoded when submitting it to the server.

| Value | Description |
| :---: | :---: |
| application/x-www-form-urlencoded | Default. All characters are encoded before sent \(spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values\) |
| multipart/form-data | No characters are encoded. This value is required when you are using forms that have a file upload control |
| text/plain | Spaces are converted to "+" symbols, but no special characters are encoded |

### Usage

```html
<form method="POST" enctype="multipart/form-data">
        <label for="photo">Photo</label>
        <input id="photo" name="photo" type="file"/>
        <p>Please select a photo</p>
        <input type="submit">
</form>
```

## Multer Package

Multer is a Express.js middleware for handling multipart/form-data, which is primarily used for uploading files.

Multer adds a `body` object and a `file` or `files` object to the request object.

The `body` object contains the values of the text fields of the form, the `file` or `files` object contains the files uploaded via the form.

### Installation

```bash
$ npm install --save multer
```

### Usage

```js
const multer = require('multer')
const upload = multer({/* opts */})

app.post('/users/add', upload.single('photo'), (req, res) => {
    /* handle req.body and req.file */
})
```

### File Information

`req.file` contains the following information:

| key | description | note |
| :---: | :---: | :---: |
| fieldname | Field name specified in the form |  |
| originalname | Name of the file on the user's computer |  |
| encoding | Encoding type of the file |  |
| mimetype | Mime type of the file |  |
| size | Size of the file in bytes |  |
| buffer | A Buffer of the entire file | MemoryStorage |
| destination | The folder to which the file has been saved | DiskStorage |
| filename | The name of the file within the destination | DiskStorage |
| path | The full path to the uploaded file | DiskStorage |

## Storage Options

* Memory Storage: volatile
* File System Storage: easy
* Database Storage: persistent
* Cloud Storage Service: durable & scalable & global but expensive

## Reference

* [https://www.w3schools.com/tags/att\_form\_enctype.asp](https://www.w3schools.com/tags/att_form_enctype.asp)
* [https://www.npmjs.com/package/multer](https://www.npmjs.com/package/multer)



