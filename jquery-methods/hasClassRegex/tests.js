(function() {

var $el = $('<span class="Test Testing someTest aaTestaa"></span>');

test('hasClassRegex', function() {
  equal( $el.hasClassRegex(), false );
  equal( $el.hasClassRegex('Test'), true );
  equal( $el.hasClassRegex(/ /), false );
  equal( $el.hasClassRegex(/Test/), true );
  equal( $el.hasClassRegex(/^Test/), true );
  equal( $el.hasClassRegex(/Test$/), true );
  equal( $el.hasClassRegex(/test/), false );
  equal( $el.hasClassRegex(/test/i), true );
});

}());