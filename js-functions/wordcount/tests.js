(function() {

test('wordcount', function() {
  equal( 'hello world'.wordcount(), 2 );
  equal( 'hello world, again'.wordcount(), 3 );
});

}());