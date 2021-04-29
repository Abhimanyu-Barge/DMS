/**
* Created by Pankajs.
*/

'use strict'
let co = require('co');
let coDal = require('./../../../../Helper/DALNoSql');
let mongodb = require('mongodb');

exports.validateUser =  co.wrap(function*(user) {
    try {
        let db = yield coDal.getNoSqlDB();
        let dbUser = yield db.organization.findOne({"userName": user.userName, "password": user.password},{"password":0});
        if (dbUser != null) {
            return dbUser;
        } else {
            dbUser = {};
            return dbUser;
        }
    } catch (err) {
        console.error(err.stack);
        console.log("DB connection Error");
    }
});
