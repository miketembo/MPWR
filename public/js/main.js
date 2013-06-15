console.log('Hello World');

$(document).ready(function(){
  // var poust_audio = $("audio#post_clip")[0];
  // $("button#post_button").mouseenter(function() {
  //   poust_audio.play();
  // });
  // $("button#post_button").mouseleave(function(){
  //   poust_audio.pause();
  //   poust_audio.currentTime = 0;
  // });

  var $buttons = $('button');
  _.each($buttons, function(button, key, list){

    var audioElement = "audio#" + button.id;
    var $voiceover_audio = $(audioElement)[0];
    $(button).on('mouseenter', function(){
      debugger;
      $voiceover_audio.play();
    });
    $(button).on('mouseleave', function(){
      $voiceover_audio.pause();
      $voiceover_audio.currentTime = 0;
    });
  });
});
