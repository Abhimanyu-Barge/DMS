'use strict'
let co = require('co');
let coDal = require('./../../../../Helper/DALNoSql');

// inser user details 
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

// update user details 
exports.updateUserDetails = co.wrap(function*(customer) {
    let requestStatus = {
        status : false
    };
    try {
        let db = yield coDal.getNoSqlDB();
        customer.createdDate = new Date();
        let  result = yield db.UserMaster.update({"customerId":customer.customerId},{
            "$set":{
                "customerNameEn":customer.customerNameEn,
                "mobileNumber":customer.mobileNumber,
                "coustomerAddress":customer.coustomerAddress,
                "acountNo":customer.acountNo,
                "branch":customer.branch,
                "ifc":customer.ifc,
                "aadhaarNO":customer.aadhaarNO
            }}
            )
        requestStatus.status = true;
        requestStatus.result = result;
    } catch (err) {
        console.error(err.stack);
        requestStatus.reason = err.stack;
    }
    return requestStatus;
});
