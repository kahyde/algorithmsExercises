var sum = require('./simpleArraySum');

var count = parseInt(process.argv[2]);
var numbers = process.argv[3];

numbers = numbers.split(' ');
var result = sum.simpleArraySum(count, numbers);

console.log("Total: " + result);
