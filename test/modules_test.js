'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var server = 'http://localhost:' + (process.env.PORT || 3000);

require('../index.js');
chai.use(chaihttp);

describe('Simple GET/POST tests', function() {
  it('it should return 501 for GET request for /get', function(done) {
    chai.request(server).
      get('/get').
      end(function(err, res) {
        expect(err).to.equal(null);
        expect(res).to.be.a('object');
        expect(res).to.have.status(501);
        done();
      });
  });

  it('it should return 200 for POST request for /post', function(done) {
    chai.request(server).
      post('/post').
      field('text', 'hello world').
      end(function(err, res) {
        expect(err).to.equal(null);
        expect(res).to.be.a('object');
        expect(res).to.have.status(200);
        done();
      });
  });
});
