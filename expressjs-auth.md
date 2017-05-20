# Express Auth

> You application must be secure!

## How to Safely Store passwords

* **NEVER** storex\` them in plain/clear text
* Ensure that the password is always encrypted before saving
* Use one-way password encryption rather then two-way
* Fully encapsulate the password encryption and verification logic

* Hash
* Salt
* [How NOT to Store Passwords](https://youtu.be/8ZtInClXe1Q)

## Account Locking

Hashing passwords will save your bacon if a hacker gains access to your database, but it does nothing to prevent brute-force attacks against your site's login form. This is where account locking comes in: after a specific number of failed login attempts, we simply ignore subsequent attempts, thereby putting the kibosh on the brute-force attack.

### Requirements

1. A user's account should be "locked" after some number of consecutive failed login attempts
2. A user's account should become unlocked once a sufficient amount of time has passed
3. The User model should expose the reason for a failed login attempt to the application \(though not necessarily to the end user\)

## Reference

* [https://codahale.com/how-to-safely-store-a-password/](https://codahale.com/how-to-safely-store-a-password/)
* [http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt)
* [http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose](http://devsmash.com/blog/implementing-max-login-attempts-with-mongoose)
* [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)



