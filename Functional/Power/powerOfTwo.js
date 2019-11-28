const pow1=require('../Power/test/test')
var assert=require('assert');

describe('Basic mocha power2 test',function(){
it('should return the power2 of a number',function(){
assert.equal(pow1(2),4)
});

});