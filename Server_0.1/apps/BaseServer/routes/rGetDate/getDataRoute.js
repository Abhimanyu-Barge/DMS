'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../Helper/configHelper');
let index = require('./../../index');
let coDal = require('./../../../../Helper/DALNoSql');
let mongodb = require('mongodb');
let getPeroidData = {
    method: "POST", path: index+"/getPeroidData", config: {
        auth: 'jwt',
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                let requestStatus = {
                    status : false
                };
                let db = yield coDal.getNoSqlDB();
                let peroidDate = yield db.PaymentPeroid.find({"O_Id":request.auth.credentials.O_Id},{"Customers":0,"userName":0,"Name":0}).sort({"_id":-1}).toArray();
                 requestStatus.status = true;
                 requestStatus.result = peroidDate;
                reply(requestStatus);
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};

let getInsertedCoustomer = {
    method: "POST", path: index+"/getInsertedCoustomer", config: {
        auth: 'jwt',
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                let requestStatus = {
                    status : false
                };
                let selectedPeroid = request.payload;
                let db = yield coDal.getNoSqlDB();
                let insertedCoustomers = yield db.PaymentPeroid.find({"_id":new mongodb.ObjectID(selectedPeroid._id)},{"Customers":1}).toArray();
                 requestStatus.status = true;
                 requestStatus.insertedCoustomer = insertedCoustomers;
                reply(requestStatus);
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};

let getTotalCoustomer = {
    method: "POST", path: index+"/getTotalCoustomer", config: {
        auth: 'jwt',
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                console.log(request.auth.credentials);
                console.log(request.payload);

                let requestStatus = {
                    status : false
                };
                let db = yield coDal.getNoSqlDB();
                let coustomers = yield db.UserMaster.find({}).toArray();
                 requestStatus.status = true;
                 requestStatus.coustomers = coustomers;
                reply(requestStatus);
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};
module.exports = [getPeroidData,getInsertedCoustomer,getTotalCoustomer];