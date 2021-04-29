
var wrapper = require('co-mysql'),
    mysql = require('mysql');

var nconf = require('nconf');

exports.getDB = function() {
    var configuration = nconf.get('databaseMYSQL');
    var pool = mysql.createPool(configuration);
    var mysqldb = wrapper(pool);
    return mysqldb;
};