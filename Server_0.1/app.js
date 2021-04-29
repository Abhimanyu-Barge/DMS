const hapi = require('hapi');
const hapiServer = require('./Helper/hapiServer');
const configHelper = require('./Helper/configHelper');
hapiServer.startServer();
const server = hapiServer.getServer();
const app = server.select('restServer');
//A Rule Based Access Control module for hapi
// import the hapi-rbac module
app.register({
    register: require('hapi-rbac')
}, function(err) {
    if (err != undefined) {
        console.error(err);
    }
});
app.register(require('hapi-auth-jwt2'), function(err) {
    if (err) {
        console.error(err);
    }
    app.auth.strategy('jwt', 'jwt', {
        key: 'secret', // Never Share your secret key
        validateFunc: hapiServer.validate, // validate function defined above
        verifyOptions: { algorithms: ['HS256'] } // pick a strong algorithm
    });
    app.auth.default('jwt');
});
// API DOCS
if (configHelper.getConfig("environment") != "production") {
    app.register([require('vision'), require('inert'), { register: require('lout') }], function(err) {});
}
var options = {
    ops: {
        interval: 5000
    },
    reporters: {
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*', response: '*' }]
        }, {
            module: 'good-console'
        }, 'stdout']
    }
};

// Router Binding
app.register({
    register: require('hapi-router'),
    options: { routes: 'apps/*/routes/*/*.js' }
    // uses glob to include files

}, function(err) {
    if (err) throw err;
});
//app.route(routeList);
//Logging
app.register({
    register: require('good'),
    options: options
}, function(err) {});
// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', app.info.uri);
});
