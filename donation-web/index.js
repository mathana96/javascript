'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 4000 });

const initUsers = {
  'bart@simpson.com':{
    firstName: 'Bart',
    lastName: 'Simpson',
    email: 'bart@simpson.com',
    password: 'secret',
  },
  'lisa@simpson.com':{
    firstName: 'Lisa',
    lastName: 'Simpson',
    email: 'lisa@simpson.com',
    password: 'secret',
  }
};
server.bind({
  // currentUser: {},
  users: initUsers,
  donations: [],
});

//Loading plugins
server.register([require('inert'), require('vision'), require('hapi-auth-cookie')], err => {

  if (err) {
    throw err;
  }

  server.views({
    engines: {
      hbs: require('handlebars'),
    },
    relativeTo: __dirname,
    path: './app/views',
    layout: true,
    layoutPath: './app/views/layouts',
    partialsPath: './app/views/partials',
    isCached: false,
  });

  server.auth.strategy('standard', 'cookie', {
    password: 'secretpasswordnotrevealedtoanyone',
    cookie: 'donation-cookie',
    redirectTo: '/login',
    isSecure: false, //for testing and development, over non-secure conections
    ttl: 24 * 60 * 60 * 1000, //1 day
  });

  server.auth.default({
    strategy: 'standard',
  });

  server.route(require('./routes'));

  server.start((err) => {
    if (err) {
      throw err;
    }

    console.log('Server listening at: ', server.info.uri);
  });
});
