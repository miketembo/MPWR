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

$('button#help').on('click', function(){
  $('button#record').addClass('highlight');
  setTimeout(function(){
    $('button#record').removeClass('highlight');
    $('button#play').addClass('highlight');
  },7000);
  setTimeout(function(){
    $('button#play').removeClass('highlight');
    $('button#view').addClass('highlight');
  },12000);
  setTimeout(function(){
    $('button#view').removeClass('highlight');
    $('button#search').addClass('highlight');
  },19000);
    setTimeout(function(){
    $('button#search').removeClass('highlight');
  },25000);
})

  var $buttons = $('button');
  // debugger;
  $buttons = $buttons.add($('li#search'));
  $buttons = $buttons.add($('li#view'));


  _.each($buttons, function(button, key, list){
    var audioElement = "audio#" + button.id;
    var $voiceover_audio = $(audioElement)[0];
    // console.log(button);
    $(button).on('mouseenter', function(){

      $voiceover_audio.play();
    });
    $(button).on('mouseleave', function(){
      $voiceover_audio.pause();
      $voiceover_audio.currentTime = 0;
    });
  });
});
