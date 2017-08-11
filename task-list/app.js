const http = require('http');
const port = 8000;
http.createServer(requestListener).listen(port);
console.log('Server listening on port', port);

function requestListener(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  console.log('Request received, responding now...');
  res.end('Hello world');
}




