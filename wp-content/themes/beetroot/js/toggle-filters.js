( function ( window, document, undefined ) {
  'use strict';

  // Add drawer toggle after filter selects
  jQuery( '.sf-field-taxonomy-place_region' ).after( '<li id="filters_toggle" class="searchfilters__toggle">Options</li>');
  var filtersControl = jQuery( '#filters_toggle' );

  // Add drawer
  var filtersContainerMarkup = jQuery( '<ul class="layout-filters-drawer"></ul>' ).hide();
  jQuery( '.searchandfilter' ).append( filtersContainerMarkup );
  var filtersContainer = jQuery( '.layout-filters-drawer' );

  // Set location of type and tag filters
  filtersContainer.append( jQuery('.sf-field-taxonomy-place_type') );
  filtersContainer.append( jQuery('.sf-field-tag') );

  // Initialize the media query
  var mediaQuery = window.matchMedia( '(max-width: 47em)' );

  // Add an event listener
  mediaQuery.addListener( setSortInput );

  function setSortInput( mediaQuery ) {
    if ( mediaQuery.matches ) {
      filtersContainer.prepend( jQuery('.sf-field-sort_order') );
      jQuery( '.sf-field-sort_order' ).css('display', 'flex');
    } else {
      jQuery( '.searchandfilter ul:first()' ).append( jQuery('.sf-field-sort_order') );
      jQuery( '.sf-field-sort_order' ).css('display', 'flex');
    }
  }

  filtersControl.click( function() {
    filtersContainer.slideToggle(100);
    filtersControl.parent().toggleClass('is-open');
  });

  // On load
  setSortInput( mediaQuery );

})( window, document );
