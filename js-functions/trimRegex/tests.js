(function() {

test('wordcount', function() {
  equal( 'hello world'.trimRegex(), 'hello world' );
  equal( '   hello world   '.trimRegex(), 'hello world' );
  equal( '   hello world   '.trimRegex(' '), 'hello world' );
  equal( 'ssshello worldsss'.trimRegex('s'), 'hello world' );
  equal( '$$$hello world$$$'.trimRegex('$'), 'hello world' );
  equal( '+++hello world+++'.trimRegex('+'), 'hello world' );
  equal( '(((hello world((('.trimRegex('('), 'hello world' );
  equal( ')))hello world)))'.trimRegex(')'), 'hello world' );
  equal( '...hello world...'.trimRegex('.'), 'hello world' );
  equal( '***hello world***'.trimRegex('*'), 'hello world' );
  equal( '^^^hello world^^^'.trimRegex('^'), 'hello world' );
  equal( '???hello world???'.trimRegex('?'), 'hello world' );
  equal( '\\\\\\hello world\\\\\\'.trimRegex('\\'), 'hello world' );
});

}());