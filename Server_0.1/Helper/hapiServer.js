
const hapi = require('hapi');
const configHelper = require('./configHelper');
var app;

exports.startServer = function () {
    app = new hapi.Server();
    app.connection({
        host: configHelper.getConfig("host"),
        port: configHelper.getConfig("port"),
        labels : ['restServer']
    });
};

exports.getServer = function () {
    return app;
};

exports.validate = function (decoded, request, callback) {
    // do your checks to see if the person is valid
    return callback(null, true,decoded);
};
