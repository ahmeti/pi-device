module.exports = function(io) {

  var sleep = require('sleep');

  var Gpio = require('onoff').Gpio,
  device2in = new Gpio(16, 'in'),
  device2 = new Gpio(25, 'out'),
  alert1 = new Gpio(26, 'out');

  device2status=0;

  device2in.watch(function(err, value) {
    
    sleep.msleep(1);

    if(value == 0 && device2status != 0){
	device2status = 0;
        alert1.writeSync(0); 
        console.log('Makine 2 Durdu');
    }else if(value == 1 && device2status != 1){
	device2status = 1;
        alert1.writeSync(1); 
        console.log('Makine 2 Çalıştı');
    }

  });

  io.on('connection', function(socket){

    console.log('a user connected');

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('device-start', function(deviceName){

      if(deviceName == 'device2'){ device2.writeSync(1); }

    });
  
    socket.on('device-stop', function(deviceName){
      if(deviceName == 'device2'){ device2.writeSync(0); }
    });

  });

};