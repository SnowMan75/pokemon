/* global faker: false */

'use strict';

var POKEMON = {
  // Empty object is our placeholder for all of the fake Pokemon functions and properties
  names: [],
  weaknesses: [],
  types: [],
  descriptions: []
};

(function($) {
  $(document).ready(function() {
    // Generate fake Pokemon names
    for (var i = 0; i < 100; i++) {
      POKEMON.names.push(faker.name.findName());
      POKEMON.weaknesses.push(faker.lorem.words().join(', '));
      POKEMON.types.push(faker.company.bsNoun());
      POKEMON.descriptions.push(faker.lorem.paragraph());
    }

    // Add names to each Pokemon card
    $('.pokemon-image').each(function(index) {
      $(this).after('<h1>' + POKEMON.names[index] + '</h1>');
    });

    $('.pokemon-weakness').each(function(index) {
      $(this).html(POKEMON.weaknesses[index]);
    });

    $('.pokemon-type').each(function(index) {
      $(this).html(POKEMON.types[index]);
    });

    $('.pokemon-description').each(function(index) {
      $(this).html(POKEMON.descriptions[index]);
    });

    $('#logo').on('click', function(e) {
      e.preventDefault();
      $('#drawer').toggleClass('is-open');
    });
  });
})(jQuery);








