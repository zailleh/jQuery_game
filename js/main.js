// console.log( 'hello world' );

$(document).ready( function() {

  $( "#htmlpreview" ).text( $( '#output' ).html() )

  var outputBackup = $("#output").clone(); // take copy of original output div

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
    $("#output").replaceWith(outputBackup.clone()); // Restore element with a copy of outputBackup

    const executeTypedjQuery=new Function ( editor.getValue() );

    return( executeTypedjQuery() );
  })
});
