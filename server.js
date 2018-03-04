var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);

require(__dirname + '/app/routes.js')(express);



io.on('connection', function(socket){
  console.log('a user connected');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});