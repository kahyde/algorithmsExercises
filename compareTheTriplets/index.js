var compare = require('./compareTheTriplets');

var a0_temp = process.argv[2].split(' ');
var a0 = parseInt(a0_temp[0]);
var a1 = parseInt(a0_temp[1]);
var a2 = parseInt(a0_temp[2]);

var b0_temp = process.argv[3].split(' ');
var b0 = parseInt(b0_temp[0]);
var b1 = parseInt(b0_temp[1]);
var b2 = parseInt(b0_temp[2]);

var result = compare.compareTheTriplets(a0, a1, a2, b0, b1, b2);

console.log(result.join(" "));
