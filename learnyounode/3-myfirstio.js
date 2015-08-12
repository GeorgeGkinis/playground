/**
 * Created by q on 26/07/15.
 */
//fs to read files from fs
var fs = require('fs');

//readFileSync returns a buffer object
var lines = fs.readFileSync(process.argv[2]);

lines = lines.toString().split('\n');

console.log(lines.length - 1);