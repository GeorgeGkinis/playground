var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    req.setEncoding('utf8');
   // console.log(req._header);
    req.on('get',function(chunk){
        res.writeHead(200,{'Content-type': ' application/json'});
        console.log(url.parse(req.url, true));
        //res.end();
    });
    //req.on('end',function(){
    //    res.end();
    //})

});

server.listen(process.argv[2]);

