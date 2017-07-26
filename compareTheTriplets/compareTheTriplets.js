exports.compareTheTriplets = function( a0, a1, a2, b0, b1, b2 ) {
  var alice = 0;
  var bob = 0;

  var a = [a0, a1, a2];
  var b = [b0, b1, b2];

  for ( var i = 0; i < a.length; i++ ) {
    if ( a[i] > b[i] ) {
      alice++;
    } else if ( a[i] < b[i] ){
      bob++;
    }
  }

  return [alice, bob];
};
