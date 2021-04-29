var nconf = require('nconf');
var loadedFlag = false;
exports.getConfig = function getConfig(key){
    if(! loadedFlag)
    {
        nconf.file(__dirname + '/../config.json');
        nconf.load();
        loadedFlag = true;
    }
    return(nconf.get(key));
};
