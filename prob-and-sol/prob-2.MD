**Project:** Donations

**Problem:** `TypeError: Uncaught error: Cannot read property 'push' of undefined` when using `arrow function` for `handler`

**Solution:** (I think. Source: https://rainsoft.io/when-not-to-use-arrow-functions-in-javascript/);

**File name:** `accounts.js`
Below throws error;
```javascript
exports.register = {

  handler: (request, reply) => {
    const data = request.payload;
    this.users.push(data);
    reply.redirect('/home');
  },

};
```
This version works;
```javascript
exports.register = {

  handler: function (request, reply) {
    const data = request.payload;
    this.users.push(data);
    reply.redirect('/home');
  },

};
```
Possibly because `user` is an object literal.
