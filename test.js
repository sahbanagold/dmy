var mocha = require('mocha')
var chai = require('chai')
var dmy = require('./index.js')
var should = chai.should();


describe('dmy', function() {
    it('should return date of today', function(done) {
      console.log(dmy());
        dmy().should.equal(new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+(new Date().getYear()+1900))
                done();
    });
})
