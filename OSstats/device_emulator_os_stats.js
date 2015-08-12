var os = require('os');
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/pts/12",  false); // this is the openImmediately flag [default is true]



setInterval(function(){
    var stat = JSON.stringify({"CPU 1" : os.cpus()[1].speed});
    serialPort.open(function (error) {

            if ( error ) {
                console.log('failed to open: '+error);
            } else {
                serialPort.write(stat)
            }
        }
    );
},1000);



setInterval(function(){
    var stat = JSON.stringify({ "Free RAM (MB)" : ((os.freemem()/1024)/1024)});
    serialPort.open(function (error) {

            if ( error ) {
                console.log('failed to open: '+error);
            } else {
                serialPort.write(stat)
            }
        }
    );
},500);