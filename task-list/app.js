// const http = require('http');
// const port = 8000;
// http.createServer(requestListener).listen(port);
// console.log('Server listening on port', port);
//
// function requestListener(req, res) {
//   res.writeHead(200, {'Content-Type' : 'text/plain'});
//   console.log('Request received, responding now...');
//   res.end('Hello world');
// }
//
//
//
//
//
// const express = require('express');
// const app = express();
// const port = 8000;
//
// app.use(requestListener).listen(port);
// console.log('Port is listening on port', port);
//
// function requestListener(req, res) {
//   console.log('Responding now..');
//   res.send('Hello world');
// }

const taskList = [];
app.get('/list', function (req, res) {
  res.send(taskList);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json);

taskList[0] = 'Hello world';

app.post('/task', function(req, res){
  taskList.push(req.body.task);
  res.send(taskList);
});
