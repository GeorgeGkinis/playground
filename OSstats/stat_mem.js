var os = require('os');
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/pts/12",  false); // this is the openImmediately flag [default is true]



setInterval(function(){
    var stat = JSON.stringify({CPU : os.cpus()[1].speed});
    serialPort.open(function (error) {

            if ( error ) {
                console.log('failed to open: '+error);
            } else {
                serialPort.write(stat)
            }
        }
    );
},1000);
