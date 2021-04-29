var co = require('co');
var sql = require('co-mssql');
var nconf = require('nconf');

exports.getMSSQLDB = co.wrap(function*() {
	var config = nconf.get('databaseMSSQL');
     var connection =  new sql.Connection(config);
     return connection;
});