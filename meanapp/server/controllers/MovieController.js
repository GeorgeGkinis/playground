// Register mongoose resources and default RESTful routes are automatically made.
/* you only create the model. The REST API is automatically created */
var restful = require('node-restful');

module.exports = function(app, route){

    // Setup the controller for REST.
    var rest = restful.model(
        'movie',
        app.models.movie
    ).methods(['get','put','post','delete']);

    // Register this endpoint with the application.
    rest.register(app,route);

    // Return middleware. This approach allows us to use different middleware to
    // each controller
    return function(req, res, next){
        next();
    };
};