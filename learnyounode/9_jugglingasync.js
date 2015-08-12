var http = require('http');
var bl = require('bl');

var queue = {};
queue.url = [];
queue.strings = [];
queue.pending = 0;

queue.getURL = function () {
    for (i=2;i<process.argv.length;i++){
        this.url[i-2] = process.argv[i];
    }
};

queue.getStrings = function () {
    var q = this;
    for (i = 0; i < q.url.length; i++) {
        q.pending++;

        //Using closure to parr current i.
        (function(i) {
        http.get(q.url[i], function (res) {
            res.pipe(
                bl(function (err, data) {
                    if (err)
                        return console.error(err);
                        q.strings[i]=data.toString();
                        q.pending--;
                    if (q.pending === 0 ) for (i = 0; i < q.url.length; i++) {
                        console.log(q.strings[i]);
                    }
            }
            ))
        });
    })(i);

    }

};

queue.getURL();
queue.getStrings();


