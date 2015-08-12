var http = require('http');
var url = process.argv[2];
//console.log(http.get(process.argv[2]));

http.get(url,function callback(res) {
    res.setEncoding('utf8');
    res.on('data',console.log);
    res.on('error',console.error);
    });
