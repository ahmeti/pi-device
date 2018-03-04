var express = require('express')();
var http = require('http').Server(express);
var io = require('socket.io')(http);

var app = {};

// Routes
require(__dirname + '/app/routes.js')(express);


// Socket
require(__dirname + '/app/socket.js')(io);


// Gpio
require(__dirname + '/app/gpio.js')(app);


// Server
http.listen(3000, function(){
  console.log('listening on *:3000');
});