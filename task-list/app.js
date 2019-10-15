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
