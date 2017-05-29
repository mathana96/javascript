'use strict';

exports.main = {

  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },

};

exports.signup = {

  handler: function (request, reply) {
    reply.view('signup', { title: 'Sign up for Donations' });
  },

};

exports.login = {

  handler: function (request, reply) {
    reply.view('login', { title: 'Login to Donations' });
  },

};

exports.authenticate = {

  handler: function (request, reply) {
    const user = request.payload;
    if ((user.email in this.users) && (user.password === this.users[user.email].password)) {
      reply.redirect('/home');
    } else {
      reply.redirect('/signup');
    }
  },

};

exports.logout = {

  handler: function (request, reply) {
    this.currentUser = null;
    reply.redirect('/');
  },

};

// exports.register = {
//
//   handler: (request, reply) => {
//     const data = request.payload;
//     this.users.push(data);
//     reply.redirect('/home');
//   },
//
// };

exports.register = {

  handler: function (request, reply) {
    const user = request.payload;
    this.users[user.email] = user; //Insert new User objects where the user's email is the 'key'
    // console.log(this.users);
    reply.redirect('/home');
  },

};
