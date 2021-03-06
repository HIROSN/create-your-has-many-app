'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var server = 'http://localhost:' + (process.env.PORT || 3000);

require('../index.js');
chai.use(chaihttp);

describe('Simple GET/POST tests', function() {
  it('should return 501 for GET request for /get', function(done) {
    chai.request(server)
    .get('/get')
    .end(function(err, res) {
      expect(err).to.equal(null);
      expect(res).to.be.a('object');
      expect(res).to.have.status(501);
      done();
    });
  });

  it('should return 200 for POST request for /post', function(done) {
    chai.request(server)
    .post('/post')
    .field('text', 'hello world')
    .end(function(err, res) {
      expect(err).to.equal(null);
      expect(res).to.be.a('object');
      expect(res).to.have.status(200);
      done();
    });
  });

  it('should return 200 for GET request for /', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      expect(err).to.equal(null);
      expect(res).to.be.a('object');
      expect(res).to.have.status(200);
      done();
    });
  });

  it('should return 404 for GET request for /nohandler', function(done) {
    chai.request(server)
    .get('/nohandler')
    .end(function(err, res) {
      expect(err).to.equal(null);
      expect(res).to.be.a('object');
      expect(res).to.have.status(404);
      done();
    });
  });
});
