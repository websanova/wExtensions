(function() {

test('base64Encode', function() {
  equal( window.base64Encode("testing123"), "dGVzdGluZzEyMw==" );
  equal( window.base64Encode("testing123ž"), "dGVzdGluZzEyM8W+" );
  equal( window.base64Encode("testing123Å¾"), "dGVzdGluZzEyM8OFwr4=" );
});

}());