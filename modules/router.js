'use strict';

var url = require('url');

module.exports = function(handlers) {
  var router = {
    use: function(app) {
      for (var path in handlers) {
        var handler = handlers[path];
        app[handler.type](path, handler.handleRequest);
      }

      app.all('*', function(req, res, next) {
        var pathname = url.parse(req.url).pathname;

        if (!handlers[pathname]) {
          return res.status(404).send(
            'Sorry, but we cannot find the page you are looking for.');
        }

        next();
      });
    },
  };

  return router;
};
