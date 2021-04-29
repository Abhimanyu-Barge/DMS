
var MongoClient = require('thunkify-mongodb').MongoClient;
var mongodb = require('mongodb');
var co = require('co');
var loggerHelper = require('./../Helper/loggerHelper');
var configHelper = require('./../Helper/configHelper');

var schemaMapper = require('./../apps/BaseServer/schemaMapper');

var dbConnected = false;
var simulateDatabaseCrash = false;

var db;

exports.setDBCrash = co.wrap(function* () {
    dbConnected = false;
    simulateDatabaseCrash = true;
});


exports.setDBUp = co.wrap(function* () {
    dbConnected = false;
    simulateDatabaseCrash = false;
});

exports.getNoSqlDB = co.wrap(function* () {

    if (!dbConnected) {

        try {

            loggerHelper.info("Conneting to DB server ");
            var mongoClientVar = new MongoClient(new mongodb.MongoClient());

            if(!simulateDatabaseCrash)
            {
                db = yield  mongoClientVar.connect(configHelper.getConfig("databaseNoSql:connectionString"));
            }
            else
            {
                db = yield  mongoClientVar.connect("122313");
            }

            loggerHelper.info("Connected to DB server !");
            db = yield schemaMapper.registerSchemas(db);

            dbConnected = true;

        } catch (er) {
            loggerHelper.error(er.stack);
        }
        return db;
    }
    else
    {
        return db;
    }


});
