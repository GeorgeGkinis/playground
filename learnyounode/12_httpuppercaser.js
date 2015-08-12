var http = require('http');


var server = http.createServer(function (req, res) {
    // request handling logic...
    //console.log(req);
    req.setEncoding('utf8');
    //console.log(req._header);
    var data ="";
    req.on('data',function(chunk){
        res.write(chunk.toUpperCase());
        //res.end();
    })
    req.on('end',function(){
        res.end();
    })

});

server.listen(process.argv[2]);

