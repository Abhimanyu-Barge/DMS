var NodeCache = require( "node-cache" );
var cacheObject = new NodeCache( { stdTTL: 86400, checkperiod: 1000 } );
exports.getCache = function getCache (key){
    return cacheObject.get(key );
};
exports.setCache = function setCache (key,val,timer){
    cacheObject.set( key,val,timer );
};

