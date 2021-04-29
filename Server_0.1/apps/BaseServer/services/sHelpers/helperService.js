/**
 * Created by rahuls on 01-Dec-15.
 */


var JWT   = require('jsonwebtoken');
var co = require('co');


exports.getGUID = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};


exports.getNewSessionObject = function() {

    return {

        "_id" : this.getGUID(),
        "sessionTitle" : "",
        "startDateTime" : "",
        "description" : "",
        "rating" : 2.5,
        "conductedBy" : "",
        "attendedBy" : [],
        "questions" : [],
        "tags" : [],
        "category" : "",
        "subCategory" : "",
        "contentMedium" : "",
        "ratings" : [],
        "likes" : [],
        "videoURL" : "",
        "videoThumbnailURL" : ""

    };


};

/*
exports.parseLoggedInUserFromRequest = co.wrap(function* (request){

});
*/

exports.parseLoggedInUserFromRequest = co.wrap(function*(request) {

    if(request == undefined || request == null){
        return {};
    }
    var token = request.headers.authorization;

    if(token == undefined || token == null) {
        return {};
    }

    token  = token.substr("Bearer ".length);
    var decoded = JWT.decode(token);

    return decoded;

});