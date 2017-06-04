'use strict';

const User = require('../models/user');

exports.main = {
  auth: false,
  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },

};

exports.signup = {
  auth: false,
  handler: function (request, reply) {
    reply.view('signup', { title: 'Sign up for Donations' });
  },

};

exports.login = {
  auth: false,
  handler: function (request, reply) {
    reply.view('login', { title: 'Login to Donations' });
  },

};

exports.authenticate = {
  auth: false,
  handler: function (request, reply) {
    const user = request.payload;
    User.findOne({email: user.email}).then(foundUser => {
      if (foundUser && foundUser.password === user.password) {
        request.cookieAuth.set({
          loggedIn: true,
          loggedInUser: user.email,
        });
        reply.redirect('/home');
      } else {
        reply.redirect('/signup');
      }
    }).catch(err => {
      reply.redirect('/');
    });
  },
};

exports.logout = {
  auth: false,
  handler: function (request, reply) {
    request.cookieAuth.clear();
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

// exports.register = {
//   auth: false,
//   handler: function (request, reply) {
//     const user = request.payload;
//     this.users[user.email] = user; //Insert new User objects where the user's email is the 'key'
//     // console.log(this.users);
//     reply.redirect('/home');
//   },
//
// };

exports.register = {
  auth: false,
  handler: function (request, reply) {
    const user = new User(request.payload);
    user.save().then(newUser => {
      reply.redirect('/login');
    }).catch(err => {
      reply.redirect('/');
    });
  },
};

exports.settings = {
  handler: function (request, reply) {
    const userEmail = request.auth.credentials.loggedInUser;
    const currentUserDetails = this.users[userEmail];
    reply.view('settings', { title: 'Account Settings', user: currentUserDetails });
  },
};

exports.updatesettings = {
  handler: function (request, reply) {
    const user = request.payload;
    let currentUser = this.users[request.auth.credentials.loggedInUser];
    const oldEmail = currentUser.email;

    this.users[user.email] = user;

    delete this.users[oldEmail];
    // jscs:ignore disallowTrailingWhitespace
    reply.redirect('/home');
  },
};
