'use strict'
let co = require('co');
let joi = require('joi');
let JWT = require('jsonwebtoken');
var nconf = require('nconf');
let ProductService = require('./../../services/sProduct/productService');
let index = require('./../../index');



let getProductList = {
    method: "POST", path: index+"/productList", config: {
        auth: false,
        description: 'This Api Return product List ',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                var result = yield ProductService.getProductAllList();
                reply("hi")
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};

let saveProductList = {
    method: "POST", path: index+"/saveProduct", config: {
        auth: false,
        description: 'This Api Return product List ',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                reply(" Save Api ");
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};


module.exports = [getProductList,saveProductList];