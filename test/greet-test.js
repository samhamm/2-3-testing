// greet_test.js
// Sam Hamm - for 2/3 assignment on testing

'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet');
var people;

describe('greet', function(name) {
  it('should greet people by name', function() {
    expect(greet.to(name)).to.eql('hello ' + name);
  });

  it('should take names to greet from cmd line', function() {
    expect(greet.toAll(people)).to.eql('hello ' + people);
  });
});

