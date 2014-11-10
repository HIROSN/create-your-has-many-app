'use strict';

var server = require('./modules/server');
var router = require('./modules/router');

var handlers = {};
handlers['/']     = require('./modules/root_handler');
handlers['/post'] = require('./modules/post_handler');
handlers['/get']  = require('./modules/get_handler');

(function printRouterHasManyHandlersRelationship() {
  var str = '';
  for (var key in handlers) {
    str += (!str ? 'server *-> router *-> ' :
      '\n                  +-> ') + handlers[key].toString();
  }
  console.log(str);
})();

server(router(handlers), process.env.PORT || 3000);
