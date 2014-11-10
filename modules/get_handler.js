'use strict';

var Handler = require('../lib/handler');

var GetHandler = function() {};
GetHandler.prototype = new Handler('get', 'get_handler');

module.exports = new GetHandler();
