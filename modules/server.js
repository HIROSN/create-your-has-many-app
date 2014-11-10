'use strict';

var express = require('express');

var server = function(router, port) {
  var app = express();
  router.use(app);
  app.listen(port);
};

module.exports = server;
