'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../Helper/configHelper');
let index = require('./../../index');
let peroidService = require('../../services/sReport/reportService');
let createPeroidApi = {
    method: "POST", path: index+"/createPeroid", config: {
        auth: 'jwt',
        description: 'This API create User ',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                let P_data = request.payload;
                let c_user = request.auth.credentials;
                let ResultData = yield peroidService.createPeroid(P_data,c_user);
                reply(ResultData);
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};
module.exports = [createPeroidApi];
