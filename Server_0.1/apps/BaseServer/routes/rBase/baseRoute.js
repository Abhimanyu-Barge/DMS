'use strict'
let co = require('co');
let joi = require('joi');
let JWT   = require('jsonwebtoken');
let configHelper = require('./../../../../Helper/configHelper');
let index = require('./../../index');
let baseCollectionService = require("./../../services/sBase/baseService");
let coDal = require('./../../../../Helper/DALNoSql');
let RequestHelper = require('../../../../Helper/RequestHelper')
let mongodb = require('mongodb');
var admin = require('firebase-admin');
var serviceAccount = require('./../../../../keyProject/event-afb5f-402ca0448751.json')
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL: "https://event-afb5f.firebaseio.com"
})
var db = admin.firestore();

let getBaseList = {
    method: "POST", path: index+"/getBaseList", config: {
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
                reply("result");
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};


let createEvent = {
    method: "GET", path: index+"/createEvent", config: {
        auth: false,
        description: 'get list of base collection objects',
        notes: 'get a node based on node id',
        tags: ['node', 'get']
    },
    handler: function(request, reply) {
        co(function* () {
            try {
                // console.log(request.auth.credentials);
                // console.log(request.payload);
            //     let timeDate =  new Date()
            //     let timeins= {
            //         "date":timeDate,
            //         "Auther":"abhimanyu barge"
            // }
            // db.collection('events').doc('slot').set(timeins).then(()=>{
           //     console.log("document is inserted ")
          // })

            //    db.collection('events').doc('slot').get().then(doc=>{
            //     if (!doc.exists) {
            //         console.log('No such document!');
            //       } else {
            //         console.log('Document data:', doc.data());
            //       }
            //     }).catch(err=>{
            //         console.log('error')
            //     })

                reply("result");
            }catch (e) {
                console.error(e.stack);
                reply(e);
            }
        });
    }
};

module.exports = [getBaseList,createEvent];
