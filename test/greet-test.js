// greet_test.js
// Sam Hamm - for 2/3 assignment on testing

'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet');
var name;

describe('greet', function() {
  it('should greet people by name', function() {
    expect(greet(name)).to.eql('hello ' + name);
  });

  it('should take a name to greet from cmd line', function() {
    expect(greet(process.argv.slice(2))).to.eql('hello ' + process.argv.slice(2));
  });
});
