# Express Auth

> You application must be secure!

## How to Safely Store passwords

* **NEVER** storex\` them in plain/clear text
* Ensure that the password is always encrypted before saving
* Use one-way password encryption rather then two-way
* Fully encapsulate the password encryption and verification logic

* [How NOT to Store Passwords](https://youtu.be/8ZtInClXe1Q)

## Password Encryption

To encrypt the password before it is getting saved we are going to use a package called `bcrypt`.

To install `bcrypt` give the below command

```bash
$ npm install --save bcrypt
```

### Hash

### Salt

The purpose of the salt is to defeat rainbow table attacks.

## Account Locking

Hashing passwords will save your bacon if a hacker gains access to your database, but it does nothing to prevent brute-force attacks against your site's login form. This is where account locking comes in: after a specific number of failed login attempts, we simply ignore subsequent attempts, thereby putting the kibosh on the brute-force attack.

### Requirements

1. A user's account should be "locked" after some number of consecutive failed login attempts
2. A user's account should become unlocked once a sufficient amount of time has passed
3. The User model should expose the reason for a failed login attempt to the application \(though not necessarily to the end user\)

## Passport Package

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

### Verify Callback

When the credentials are valid,

```js
return done(null, user)
```

When the credentials are invalid,

```js
return done(null, false, {message: 'Incorrect username or password'}
```

When an exception occurred \(e.g. the database is not available\)

```js
return done(err)
```

Note that it is important to distinguish the two failure cases that can occur. The latter is a server exception, in which `err` is set to a non-null value. Authentication failures are natural conditions, in which the server is operating normally. Ensure that `err` remains null, and use the final argument to pass additional details.

## Reference

* [https://codahale.com/how-to-safely-store-a-password/](https://codahale.com/how-to-safely-store-a-password/)
* [http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt)
* [http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose](http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose)
* [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)



