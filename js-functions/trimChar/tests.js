(function() {

test('trimChar', function() {
  equal( 'hello world'.trimChar(), 'hello world' );
  equal( '   hello world   '.trimChar(), 'hello world' );
  equal( '   hello world   '.trimChar(' '), 'hello world' );
  equal( 'ssshello worldsss'.trimChar('s'), 'hello world' );
  equal( '$$$hello world$$$'.trimChar('$'), 'hello world' );
  equal( '+++hello world+++'.trimChar('+'), 'hello world' );
  equal( '(((hello world((('.trimChar('('), 'hello world' );
  equal( ')))hello world)))'.trimChar(')'), 'hello world' );
  equal( '...hello world...'.trimChar('.'), 'hello world' );
  equal( '***hello world***'.trimChar('*'), 'hello world' );
  equal( '^^^hello world^^^'.trimChar('^'), 'hello world' );
  equal( '???hello world???'.trimChar('?'), 'hello world' );
  equal( '\\\\\\hello world\\\\\\'.trimChar('\\'), 'hello world' );

  equal( '^^^hello world$$$'.trimChar('^'), 'hello world$$$' );
  equal( '^^^hello world$$$'.trimChar('$'), '^^^hello world' );
  equal( '^^^hello world$$$'.trimChar('^').trimChar('$'), 'hello world' );
});

}());