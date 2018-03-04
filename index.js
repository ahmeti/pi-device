var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

require(__dirname + '/app/routes.js')(app);



io.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});