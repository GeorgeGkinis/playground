//Hello!
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var os = require('os');
var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/pts/4",  false); // this is the openImmediately flag [default is true]

var message ={};
server.listen(80);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/index.html');
});

io.on('connection', function (socket) {

    setInterval(function () {
        var date = new Date();
        socket.emit('time',{time  : date});

    }, 1000);

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
            //message = data;
            socket.emit('time',{time  : data});
            console.log(data.toString());

        });
    }
});
