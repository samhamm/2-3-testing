// index.js
// Sam Hamm - for 2/3 assignment on testing

'use strict';

var greet = require('./greet.js');
console.log(greet("Tyler"));

console.log(greet(process.argv.slice(2)));
