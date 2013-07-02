(function() {

test('base64Decode', function() {
  equal( window.base64Decode("dGVzdGluZzEyMw=="), "testing123" );
  equal( window.base64Decode("dGVzdGluZzEyM8W+"), "testing123ž" );
  equal( window.base64Decode("dGVzdGluZzEyM8OFwr4="), "testing123Å¾" );
});

}());