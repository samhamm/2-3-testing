// greet.js
// Sam Hamm - for 2/3 assignment on testing

'use strict';

var app = exports = module.exports = {}; // jshint ignore:line

app.to = function(name) {
  return 'hello ' + name;
};

app.toAll = function(everyone) {
  return 'hello ' + everyone;
};
