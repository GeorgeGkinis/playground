//Hello!
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//var os = require('os');
var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/pts/10",  false); // this is the openImmediately flag [default is true]


server.listen(8080);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

io.on('connection', function (socket) {

    socket.on('my other event', function (data) {
        console.log(data);
    });
});



serialPort.open(function (error) {
    if ( error ) {
        console.log('failed to open: '+error);
    } else {
        console.log('open');
        serialPort.on('data', function(data) {
          //var message = JSON.strdata };

            io.emit('stat',JSON.parse(data));
            console.log(JSON.parse(data));

        });
    }
});
