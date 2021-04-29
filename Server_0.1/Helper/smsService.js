'use strict'

let co = require('co');
var request = require('supertest');
var configHelper = require('./configHelper');

exports.sendSMS = co.wrap(function*(smsObject) {
    try {
        request('http://54.254.130.116')
                .get('/api/sendhttp.php?authkey=4407AUQVwnW256fb78a7&mobiles=' + smsObject.mobileNumber + '&message=' + encodeURIComponent(smsObject.message) + '&sender=MKCLTD')
                .end(function (err, res) {
                    if (err) {
                        console.error("SMS sending error : " + err.stack);
                    } else {
                        console.log("Response >> " + JSON.stringify(res));
                    }

                });

    } catch (er) {
        console.error(er.stack);
    }

});