'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 4000 });

server.bind({
  currentUser: {},
  users: [],
  donations: [],
});

server.register([require('inert'), require('vision')], err => {

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
  server.route(require('./routes'));

  server.start((err) => {
    if (err) {
      throw err;
    }

    console.log('Server listening at: ', server.info.uri);
  });
});
