var through = require('through2');

var transform = through(function (buffer,_,next) {
        var tr = this;
        (function (i) {
            //console.log(i);
            if (i % 2 === 0) {
                tr.push(buffer.toString().toUpperCase());
            } else {
                tr.push(buffer.toString().toLowerCase());
            }
            next();
        })(tr.i);
        this.i++;
    }
);

transform.i = 1;

process.stdin.pipe(transform).pipe(process.stdout);

/*
 /var through = require('through2');
 var split = require('split');

 var lineCount = 0;
 var tr = through(function (buf, _, next) {
 var line = buf.toString();
 this.push(lineCount % 2 === 0
 ? line.toLowerCase() + '\n'
 : line.toUpperCase() + '\n'
 );
 lineCount ++;
 next();
 });
 process.stdin
 .pipe(split())
 .pipe(tr)
 .pipe(process.stdout)
 ;

 */

