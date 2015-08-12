/**
 * Created by q on 26/07/15.
 */
/**
 * Created by q on 26/07/15.
 */
//fs to read files from fs
var fs = require('fs');

function countLines () {
//readFileSync returns a buffer object
fs.readFile(process.argv[2],'utf8', function callback(err,data) {
            if (err) throw err;

            console.log(data.split('\n').length-1);
        }
    );
}

countLines();
