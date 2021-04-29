'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../Helper/configHelper');
let index = require('./../../index');
let registrationCollectionService = require("./../../services/sRegistration/registrationService");

let testDemo = {
    method: 'POST', path: index+'/test', config: {
        auth: false,
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                var result = "hi";
                reply(result);

            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};

module.exports = [testDemo];