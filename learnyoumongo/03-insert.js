var mongo = require('mongodb').MongoClient

var first = process.argv[2];
var last = process.argv[3];
var user = {
    firstname: first,
    lastname: last
};

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
    if (err) throw err
    var users = db.collection('users');
    users.insert(user, function (err,data) {
        if (err) throw err;
        console.log(JSON.stringify(user));
        db.close()
    })
}
