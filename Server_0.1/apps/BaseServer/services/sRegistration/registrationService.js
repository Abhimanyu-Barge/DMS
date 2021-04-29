
'use strict'
let co = require('co');
let coDal = require('./../../../../Helper/DALNoSql');
let mongodb = require('mongodb');

exports.insertUserDetails = co.wrap(function*(customer) {
    let requestStatus = {
        status : false
    };
    try {
        let db = yield coDal.getNoSqlDB();
        customer.createdDate = new Date();
        let  result = yield db.UserMaster.insert(customer)
        requestStatus.status = true;
        requestStatus.result = result;
    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }

    return requestStatus;

});
