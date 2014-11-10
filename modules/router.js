'use strict';

module.exports = function(handlers) {
  var router = {
    use: function(app) {
      for (var path in handlers) {
        var handler = handlers[path];
        app[handler.type](path, handler.handleRequest);
      }
    },
  };

  return router;
};
