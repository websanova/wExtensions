(function() {

test('removeClassRegex', function() {
  equal( $('<a class="aTest moo poo123 foo Poo PooFoo bar"></a>').removeClassRegex().attr('class'), "aTest moo poo123 foo Poo PooFoo bar");
  equal( $('<a class="aTest moo poo123 foo Poo PooFoo bar"></a>').removeClassRegex(/poo/).attr('class'), "aTest moo foo Poo PooFoo bar");
  equal( $('<a class="aTest moo poo123 foo Poo PooFoo bar"></a>').removeClassRegex(/poo/i).attr('class'), "aTest moo foo bar");
  equal( $('<a class="aTest moo poo123 foo Poo PooFoo bar"></a>').removeClassRegex(/^Test/).attr('class'), "aTest moo poo123 foo Poo PooFoo bar");
  equal( $('<a class="aTest moo poo123 foo Poo PooFoo bar"></a>').removeClassRegex(/Test/).attr('class'), "moo poo123 foo Poo PooFoo bar");
});

}());