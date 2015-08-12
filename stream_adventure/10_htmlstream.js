var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var upperStream = through(upper,'utf8',next);
var loudStream = tr.selectAll('.loud').createStream();

function upper(buffer,encoding,next){
    this.push(buffer.toString().toUpperCase());
    next();
}


loudStream.pipe(upperStream).pipe(loudStream);
//process.stdin.pipe(tr).pipe(upperStream).pipe(process.stdout);
process.stdin.pipe(tr).pipe(process.stdout);

/*
 // Here's the reference solution:

 var trumpet = require('trumpet');
 var through = require('through2');
 var tr = trumpet();

 var loud = tr.select('.loud').createStream();
 loud.pipe(through(function (buf, _, next) {
 this.push(buf.toString().toUpperCase());
 next();
 })).pipe(loud);

 process.stdin.pipe(tr).pipe(process.stdout);

 */