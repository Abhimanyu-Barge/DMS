'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../Helper/configHelper');
let index = require('./../../index');
let registrationCollectionService = require("./../../services/sRegistration/registrationService");
let registrationApi = {
    method: "POST", path: index+"/userRegistration", config: {
        auth: false,
        description: 'This API create User ',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                // var result = "hi"
                let Coustomer = request.payload;
                var result = yield registrationCollectionService.insertUserDetails(Coustomer);
                reply(result);
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};
let updateCoustomer = {
    method: "POST", path: index+"/updateCoustomer", config: {
        auth: false,
        description: 'This API create User ',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                let Coustomer = request.payload;
                console.log(Coustomer)
                var result = yield registrationCollectionService.updateUserDetails(Coustomer);
                reply(result);
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};
module.exports = [registrationApi,updateCoustomer];
