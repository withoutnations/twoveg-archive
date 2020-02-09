( function ( window, document, undefined ) {
  'use strict';

  var navItem1 = document.querySelector('.navigation-site__item:nth-child(1) a');
  var navItem2 = document.querySelector('.navigation-site__item:nth-child(2) a');

  // Initialize the media query
  var mediaQuery = window.matchMedia( '(min-width: 37.5em)' );

  // Add a listen event
  mediaQuery.addListener( swapText );

  function swapText( swapText ) {
    if ( mediaQuery.matches ) {
      navItem1.innerHTML = 'Explore the list';
      navItem2.innerHTML = 'Search on a map';
    } else {
      navItem1.innerHTML = 'Explore list';
      navItem2.innerHTML = 'Search map';
    }
  }

  swapText( mediaQuery );

})( window, document );
