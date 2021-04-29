/**
 * Created by sandeepss on 4/20/2016.
 */


const configHelper = require('./../../Helper/configHelper');

module.exports = "/" + configHelper.getConfig("applicationVersion");
