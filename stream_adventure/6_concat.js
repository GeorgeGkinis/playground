var concat = require('concat-stream');
var concatRev = concat(rev);

var rev = function(buffer){
    //buffer = buffer.toString().split(' ').reverse().join('');
    buffer = buffer.toString().split('').reverse().join('');
        process.stdout.write(buffer);
    };


process.stdin.pipe(concat(rev));
/*
 // Here's the reference solution:

 var concat = require('concat-stream');

 process.stdin.pipe(concat(function (src) {
 var s = src.toString().split('').reverse().join('');
 console.log(s);
 }));

*/