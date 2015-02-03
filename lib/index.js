// index.js
// Sam Hamm - for 2/3 assignment on testing

'use strict';

var greet = require('./greet.js');
console.log(greet.to("Tyler and Mel"));

console.log(greet.to(process.argv.slice(2)));
