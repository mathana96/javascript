const request = require('request');
const baseURL = 'https://api.github.com/users/';

function listRepos(username) {
  const requestOptions = {
    url: baseURL + username + '/repos',
    method: 'GET',
    json: {},
    headers: { 'user-agent': 'node.js' },
  };
  request(requestOptions, (err, response, body) => {
    const reply = body;
    const repos = [];
    for (let item of reply) {
      const repo = {
        name: item.name,
      };
      repos.push(repo);
    };

    console.log(requestOptions.url);
    console.log(repos);
s
  });
}

const me = 'mathana96';
listRepos(me);

