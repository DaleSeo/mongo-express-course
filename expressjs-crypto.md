# ExpressJS Crypto

NodeJS comes with a built-in crypto module so we don't have to install any 3rd-party packages.

```js
const crypto = require('crypto')
```

## One-way Encryption

One-way encryption is also called 'Hash' and there are many algorithms that we can use. \(md5, sha1, sha256, sha512...\)

You can only encrypt texts wish hash and it is impossible to decrypt them theoractically.

### How to generate a hash

Create Hash instances

```js
const hash = crypto.createHash('sha256')
```

Updates the hash content with the given data.

```js
hash.update('some data to hash')
```

Calculates the digest of all of the data passed to be hashed.

```js
hash.digest('hex')
```

## Tow-way Encryption

Instances of the `Cipher` class are used to encrypt data.

```js
const cipher = crypto.createCipher('aes192', 'a password');

let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);
// Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
```

Instances of the `Decipher` class are used to decrypt data. 

```js
const decipher = crypto.createDecipher('aes192', 'a password');

const encrypted =
    'ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
// Prints: some clear text data
```

# Referecne

* [https://nodejs.org/api/crypto.html](https://nodejs.org/api/crypto.html)
* [https://www.tools4noobs.com/online\_tools/hash/](https://www.tools4noobs.com/online_tools/hash/)



