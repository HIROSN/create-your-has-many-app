'use strict';

var Handler = function(type, name) {
  this.type = type;
  this.name = name;
};

Handler.prototype.handleRequest = function(req, res) {
  res.status(501).send('Not yet implemented.');
};

Handler.prototype.toString = function() {
  return this.name;
};

module.exports = Handler;
