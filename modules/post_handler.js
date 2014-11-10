'use strict';

var formidable = require('formidable');
var Handler = require('../lib/handler');

var PostHandler = function() {};
PostHandler.prototype = new Handler('post', 'post_handler');

PostHandler.prototype.handleRequest = function(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields) {
    if (err) { return res.status(500).send(err.toString()); }
    res.send('Received: ' + fields.text);
  });
};

module.exports = new PostHandler();
