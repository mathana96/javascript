Project: Donations
Problem: `Layouts` not working

Solution;

File name: `index.js`
```javascript
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
```
Did not include `layout: true,`
