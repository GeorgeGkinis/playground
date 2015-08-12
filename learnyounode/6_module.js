var fs = require('fs');
var path = require('path');

module.exports = function filterByExtention(dirpath, extention, callback) {

    fs.readdir(dirpath, function (err, list) {

        if (err) {return callback(err);}
        list = list.filter(function (file) {
            return path.extname(file) === '.' + extention
        });
       callback(null,list);
    });
};