process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const sleep = require('sleep');
const request = require('request');
const Gpio = require('onoff').Gpio;

const apiToken = 'wm9v5wxWKQDzybKrs5arEYBXQBOK2M';
const deviceId = 2;

const deviceRed = new Gpio(18, 'out');
const deviceYellow = new Gpio(23, 'out');
const deviceGreen = new Gpio(24, 'out');

const deviceAlert = new Gpio(25, 'out');

const deviceRead = new Gpio(17, 'in', 'both');

sleep.msleep(1);


let deviceReadStatus = null;

deviceRed.writeSync(0);
deviceYellow.writeSync(0);
deviceGreen.writeSync(0);

deviceAlert.writeSync(0);

const getRemoteDeviceStatus = new Promise(function(resolve, reject){
    request.get({
        url: "https://prc.formeras.com.tr/real-status",
        qs: {
            "api_token": apiToken,
            "device_id": deviceId
        },
        json: true
    }, function(err, response, body) {
        if (err) {
            reject('getMachineStatus');
        } else {
            console.log(body);
            resolve(body.real_work == 1 ? 1 : 0);
        }
    });
});

function setRemoteDeviceStart(){
    request.get({
        url: "https://prc.formeras.com.tr/real-start",
        qs: {
            "api_token": apiToken,
            "device_id": deviceId
        },
        json: true
    }, function(err, response, body) {
        if (err) {
            //
        } else {
            //
        }
    });
}

function setRemoteDeviceStop(){
    request.get({
        url: "https://prc.formeras.com.tr/real-stop",
        qs: {
            "api_token": apiToken,
            "device_id": deviceId
        },
        json: true
    }, function(err, response, body) {
        if (err) {
            //
        } else {
            //
        }
    });
}


getRemoteDeviceStatus.then(function(real_work){

    if( real_work == 1 ){
        deviceReadStatus = 1;
    }else{
        deviceReadStatus = 0;
    }

    deviceCurrentStatus = deviceRead.readSync() ? 1 : 0;

    if( deviceReadStatus !== deviceCurrentStatus ){
        deviceReadStatus = deviceCurrentStatus;

        if( deviceCurrentStatus == 1 ){
            setRemoteDeviceStart();
        }else{
            setRemoteDeviceStop();
        }
    }

    deviceRead.watch((err, value) => {
        if (err) {
            throw err;
        }

        value = value ? 1 : 0;
        if( deviceReadStatus === value ){
            return false;
        }
        deviceReadStatus = value;
        deviceRed.writeSync(value ? 1 : 0);

        if(value == 1){
            setRemoteDeviceStart();
        }else{
            setRemoteDeviceStop();
        }
    });

}).catch(function(hata){
    // console.log(hata)
});