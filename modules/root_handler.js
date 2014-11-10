'use strict';

var fs = require('fs');
var Handler = require('../lib/handler');

var RootHandler = function() {};
RootHandler.prototype = new Handler('get', 'root_handler');

RootHandler.prototype.handleRequest = function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(err ? 500 : 200, {'Content-Type': 'text/html'});
    res.write(err ? err.toString() : data);
    res.end();
  });
};

module.exports = new RootHandler();
