'use strict'
let co = require('co');
let index = require('./../../index');
let getBaseList = {
    method: "GET", path: index+"/getBaseList", config: {
        auth: false,
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                reply("base url");
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};


module.exports = [getBaseList];
