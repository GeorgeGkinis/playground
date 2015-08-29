var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Environment settings.
// TODO: To be transfered somewhere else
var mongoURL = 'mongodb://localhost/meanapp';
var serverPort = 3000;


// Create the application
var app = express();

//Add Middleware necesarry for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

/* CORS Support (see https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
   The CORS standard describes new HTTP headers which provide browsers and servers
   a way to request remote URLs only when they have permission.
   When we do this we allow access to anyone to our API.
   TODO: Ensure authentication prior to this point
   */
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Some content
/*
app.use('/hello', function(req, res, next){
    res.send('Hello Word!');
    next();
});
*/


// Connect to MongoDB
mongoose.connect(mongoURL);
mongoose.connection.once('open',function(){

    // Load the models.
    app.models = require('./models/index');

    // Load the routes.
    var routes = require('./routes');

    // Iterate over all routes
    _.each(routes,
        // call this function for each element
        function(controller,route){
        // Now all controllers are linked to their respective routes in routes.js
        app.use(route,controller(app,route));
    });
    console.log('Listening on port : ' + serverPort);
    app.listen(serverPort);

});
