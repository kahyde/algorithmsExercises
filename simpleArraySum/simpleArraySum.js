exports.simpleArraySum = function( count, numbers ) {
  var result = 0;

  for ( var i = 0; i < count; i++ ) {
    result = result + parseInt(numbers[i]);
  }

  return result;
};
