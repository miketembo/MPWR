console.log('Hello World');

$(document).ready(function(){
  var audio = $("#post_clip")[0];
  $("#post_button").mouseenter(function() {
    audio.play();
  });
  $("#post_button").mouseleave(function(){
    debugger;
    audio.pause();
    audio.currentTime = 0;
  });
});
