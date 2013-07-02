(function() {

test('utf8Encode', function() {
  equal( window.utf8Encode("testing123"), "testing123" );
  equal( window.utf8Encode("testing123Ÿ"), "testing123Å¸" );
  equal( window.utf8Encode("testing123ž"), "testing123Å¾" );
});

}());