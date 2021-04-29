
'use strict'
let co = require('co');
let JWT = require('jsonwebtoken');
var nconf = require('nconf');
let loginService = require('./../../services/sLogin/loginService');
let index = require('./../../index');

let cookie_options = {
    ttl: 100, // expires a year from today
    encoding: 'none', // we already used JWT to encode
    isSecure: true, // warm & fuzzy feelings
    isHttpOnly: true, // prevent client alteration
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
}


var loginRoute = {
    method: "POST",
    path: index + "/login",
    config: {
        auth: false,
        description: 'User signin route',
        notes: 'validate Username/password ',
        tags: ['login', 'signin']
    },
    handler: function(request, reply) {
        co(function*() {
            try {
                let user = request.payload;        
                let validUser = yield loginService.validateUser(user);
                var validateUser = false;
                if(validUser != null || validUser != undefined ){
                if (Object.keys(validUser).length <= 0) {
                    reply({ text: 'User name or password is invalid.' }).code(401);
                } else 
                {
                    var token = JWT.sign(validUser, nconf.get("jwtSecretKey"));
                    if(validUser != undefined || validUser != null ){
                        validateUser = true;
                    }
                    reply(JSON.stringify({ text: validateUser }))
                        .header("Authorization", token).code(200); // where token is the JWT
                }
            }else{
                reply({ text: 'Database Server Error' }).code(500);
            }
            } catch (e) {
                console.error(e.stack);
                reply({ text: 'error' });
            }
        });
    }
};
module.exports = [loginRoute];
