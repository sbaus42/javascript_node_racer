var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
  console.log('listening');
});

app.use(express.static('public'));
app.get('/', function(request, response){
  response.render(__dirname + '/public/index.ejs');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('other_event', function (data) {
    console.log(data);
  });
});
