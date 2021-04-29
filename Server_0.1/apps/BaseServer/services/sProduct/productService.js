'use strict'
let co = require('co');
let coDal = require('./../../../../Helper/DALNoSql');
let mongodb = require('mongodb');

exports.getProductAllList = co.wrap(function*(){
    let requestStatus = {
        status:false
    };
    try {
        let db= coDal.getNoSqlDB();
        let qurtyResult = yield db.productList.find({}).toArray();
    } catch (error) {
        console.error(error.stack);
        requestStatus.reason = error.stack;
    }
});

exports.saveProduct = co.wrap(function*(){
    let requestStatus = {
    status:false
    };
    try {
        let db = coDal.getNoSqlDB();
    } catch (error) {
        console.log(error.stack)
        requestStatus.status = false;
    }
});
