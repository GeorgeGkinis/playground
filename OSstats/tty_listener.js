var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/pts/8",  false); // this is the openImmediately flag [default is true]

serialPort.open(function (error) {
    if ( error ) {
        console.log('failed to open: '+error);
    } else {
        console.log('open');
        serialPort.on('data', function(data) {
            console.log(data.toString());

        });
    }
});