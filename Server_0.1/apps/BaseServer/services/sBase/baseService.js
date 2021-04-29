

'use strict'
let co = require('co');
let coDal = require('./../../../../Helper/DALNoSql');
let mongodb = require('mongodb');


exports.getBaseList = co.wrap(function*() {

    let requestStatus = {
        status : false
    };
    try {
       let db = yield coDal.getNoSqlDB();
        let result = yield db.baseCollection.find().toArray();
        requestStatus.status = true;
        requestStatus.result = result;

    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }

    return requestStatus;

});
