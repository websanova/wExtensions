(function() {

test('stripTags', function() {
  equal( 'hello<br/> world'.stripTags(), "hello world" );
  equal( 'hello<br> world'.stripTags(), "hello world" );
  equal( 'hello <span>world</span>'.stripTags(), "hello world" );
  equal( 'hello <span class="test">world</span>'.stripTags(), "hello world" );
  equal( 'hello <span style="test:test;">world</span>'.stripTags(), "hello world" );
});

}());