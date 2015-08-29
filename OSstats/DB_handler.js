
var mongo = require("mongodb").MongoClient
var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/pts/10",  false); // this is the openImmediately flag [default is true]



var url = 'mongodb://localhost:27017/OSstats';

serialPort.open(function (error) {
    if ( error ) {
        console.log('failed to open: '+error);
    } else {
        console.log('open');

        serialPort.on('data', function(data) {
    //var message = JSON.strdata };
    //console.log(JSON.parse(data));
    mongo.connect(url, function(err, db) {
        if (err) {console.log('failed to open: '+error);}
        var stat_memory = db.collection('statmem');
        stat_memory.insert(JSON.parse(data), function (err,data) {
            if (err) throw err;

            db.close()
        })
    });
    //console.log(JSON.parse(data));

});
    }
});
