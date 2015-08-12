/**
 * Created by q on 26/07/15.
 */
var fs = require('fs');
var path = require('path');
function filterByExtension() {
    fs.readdir(process.argv[2], function callback(err, list) {
        if (err) throw err;
        //console.log(list[2].extname);
        for (i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == "." + process.argv[3]) {
                console.log(list[i]);
            }
        }
    })
}

