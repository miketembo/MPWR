console.log('Hello World');

$(document).ready(function(){
  var audio = $("#post_clip")[0];
  $("#post_button").mouseenter(function() {
    debugger;
    audio.play();
  });
});
