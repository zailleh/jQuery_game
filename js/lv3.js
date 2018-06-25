let checkForWin = function () {  //returns true when win!
  return ( arguments[0].indexOf("\n") === -1 &&
          $( '.box:nth-child(odd)' ).hasClass( 'blue' ) &&
          !$( '.box:nth-child(odd)' ).hasClass('red') )
};
