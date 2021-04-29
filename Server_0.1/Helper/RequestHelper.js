'use strict'
let co= require('co');
var configHelper = require('./configHelper');
let JWT = require('jsonwebtoken');
exports.getCurrentUser = co.wrap(function*(Token){

   yield jwt.verify(Token, 'shhhhh', function(err, decoded) {
        if (err) {
            return err;
          /*
            err = {
              name: 'TokenExpiredError',
              message: 'jwt expired',
              expiredAt: 1408621000
            }
          */
        }
        return decoded
      });

})
