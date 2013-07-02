(function() {

test('reverse', function() {
  equal( "testing123".reverse(), "321gnitset" );
  equal( "TESTING".reverse(), "GNITSET" );
  equal( "1234567890".reverse(), "0987654321" );
});

}());