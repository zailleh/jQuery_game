// console.log( 'hello world' );
const markWin = function( win, winMessage ){
  console.log( win );
  if ( typeof win === 'boolean' && win ) {
    $( "#editor" ).addClass( 'win' );
    $( '.acepane.js').prepend(winMessage);
  } else {
    $( "#editor" ).removeClass( 'win' );
    winMessage.detach()
  }
}

$(document).ready( function() {

  var outputBackup = $( '#output' ).clone()

  const winMessage = $( '.winmessage' );
  winMessage.on('mouseup', function() {
      setTimeout( loadLesson, 1000 );
  });
  winMessage.detach();

  $( "#htmlpreview" ).text( $( '#output' ).html() )

  // take copy of original output div

  // initialise ACE code editor
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/javascript");

  var htmlpreview = ace.edit("htmlpreview");
  htmlpreview.setTheme("ace/theme/monokai");
  htmlpreview.session.setMode("ace/mode/html");

  htmlpreview.setOptions({
      readOnly: true,
      highlightActiveLine: false,
      highlightGutterLine: false
  })
  editor.renderer.$cursorLayer.element.style.opacity=0

  $( '#editor' ).on('keyup', function() {


    const executeTypedjQuery=new Function ( editor.getValue() );

    $("#output").replaceWith(outputBackup.clone()); // Restore element with a copy of outputBackup

    executeTypedjQuery();
    markWin( checkForWin(editor.getValue()), winMessage );
  })
});





// jQuery can load html data!
// $( "#result" ).load( "ajax/test.html" );

// jQuery can check the current url
// $(location).attr("href")

// jQuery can load new scripts!
// jQuery.getScript( url )
