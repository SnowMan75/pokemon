/* global faker: false */

'use strict';

var POKEMON = {
  // Empty object is our placeholder for all of the fake Pokemon functions and properties
};

(function($) {
  $(document).ready(function() {
    // Generate fake Pokemon names
    POKEMON.names = [];

    for (var i = 0; i < 100; i++) {
      POKEMON.names.push(faker.name.findName());
    }

    // Add names to each Pokemon card
    $('.pokemon').each(function(index) {
      $(this).prepend('<h1>' + POKEMON.names[index] + '</h1>');
    });
  });

  $('.logo').on('click', function(e) {
    e.preventDefault();
    $('#drawer').toggleClass('is-open');
  });
})(jQuery);
