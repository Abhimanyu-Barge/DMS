/**
 * Created by sandeepss on 1/16/2016.
 */



var co = require('co');
exports.registerSchemas = co.wrap(function*(db) {
    db.organization = yield db.collection('Organization');
    db.login = yield db.collection('login');
    db.UserMaster = yield db.collection('UserMaster');
    db.Customers = yield db.collection('Customers');
    db.productPriceList = yield db.collection('ProductPriceMaster');
    db.productQuantityList = yield db.collection('ProductQuantityMaster');
    db.PaymentPeroid = yield db.collection('PaymentPeroid');
    return db;
});
