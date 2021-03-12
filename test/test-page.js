var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello there');
        done();
    });
});

it('Main page status', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Other pages', function(done) {
    request('http://localhost:3000/any' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('PAGE NOT FOUND');
        done();
    });
});