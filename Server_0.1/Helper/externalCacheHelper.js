var hapiServer = require('./hapiServer');
var app = hapiServer.getServer();
var co = require('co');
var cache = app.cache({ segment: 'countries', expiresIn: 60 * 60 * 1000 });
app.method("setIntoExternalCache",function(key,value,next){
    console.log("key    :   "+key+" Value   :   "+value);
    cache.set(key,value, null, (err) => {
    });

});






