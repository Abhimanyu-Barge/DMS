var winston = require('winston');
var configHelper = require('./../Helper/configHelper');

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ json: false, timestamp: true, level: configHelper.getConfig("logger:level") })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({ json: false, timestamp: true })
    ],
    exitOnError: false
});

module.exports = logger;
