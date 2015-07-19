// index.js
// Sam Hamm - for 2/3 assignment on testing

'use strict';

var greet = require('./greet.js');
console.log(greet.to("Tyler and Mel"));

var people = process.argv.splice(2);

people.forEach(function(people) {
  console.log(greet.toAll(people));
});
