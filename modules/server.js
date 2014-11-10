'use strict';

var express = require('express');

var server = function(port, router) {
  var app = express();

  if (router) {
    router.use(app);
  }

  app.all('*', function(req, res) {
    res.status(404).send(
      'Sorry, but we cannot seem to find the page you are looking for.');
  });

  app.listen(port);
};

module.exports = server;
