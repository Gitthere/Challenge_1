var challenge_1 = require("../challenge_1");

// console.log(challenge_1.sumOfAMultiple);
var chai = require('chai')
  , expect = chai.expect
  , should = chai.should(); 

describe("Sum of a Multiple", function () {
  
  it("should return '23' for n=10", function () {
    challenge_1.sumOfAMultiple(10).should.equal(23);
  });

  it("should return '2318' for n=100", function () {
    challenge_1.sumOfAMultiple(100).should.equal(2318);
  });

  
  
});    