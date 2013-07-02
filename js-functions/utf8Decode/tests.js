(function() {

test('utf8Decode', function() {
  equal( window.utf8Decode("testing123"), "testing123" );
  equal( window.utf8Decode("testing123ž"), "testing123" );
  equal( window.utf8Decode("testing123Å¾"), "testing123ž" );
});

}());