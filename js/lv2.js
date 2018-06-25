let checkForWin = function () {
  return ( $( '.box:nth-child(even)' ).hasClass( 'blue' ) &&  !$( '.box:nth-child(even)' ).hasClass('red') ) //returns true when win!
};
