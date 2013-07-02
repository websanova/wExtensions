(function() {

test('capitalize', function() {
  equal( "testing123".capitalize(), "Testing123" );
  equal( "TESTING".capitalize(), "Testing" );
  equal( "123test".capitalize(), "123test" );
});

}());