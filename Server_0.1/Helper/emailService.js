'use strict'
let co = require('co');
var request = require('supertest');
var configHelper = require('./configHelper');
exports.sendEmail = co.wrap(function*(locals) {
    try {
        var emailserverPath =   configHelper.getConfig('emailGateway:path');

        request(emailserverPath)
            .post('/sendEmail')
            .send(locals)
            .end(function (err, res) {
                if (err) {
                    console.error("Email sending error : " + err.stack);
                    return err;
                } else {
                    console.log("Response " + JSON.stringify(res));
                    return res;
                }

            });
    } catch (er) {
        console.error(er.stack);
    }
});

exports.getEmailParametersObject  = co.wrap(function*() {
    try {
        var locals = {

            from: "Abhimanyub@mkcl.org",
            to: '',
            subject: 'Subject',
            context: {
                cdnPath: ""
            }

        };

        return locals;
    } catch (er) {
        console.error(er.stack);
        return er.stack;
    }
});