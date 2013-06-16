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
  var audioElement = "audio#help";
  var $voiceover_audio = $(audioElement)[0];
  $voiceover_audio.play();

  $('button#home').addClass('highlight');
  setTimeout(function(){
    $('button#home').removeClass('highlight');
    $('button#record').addClass('highlight');
  },7000);

  setTimeout(function(){
    $('button#record').removeClass('highlight');
    $('button#play').addClass('highlight');
  },14000);
  setTimeout(function(){
    $('button#play').removeClass('highlight');
    $('button#view').addClass('highlight');
  },20000);
  setTimeout(function(){
    $('button#view').removeClass('highlight');
    $('button#search').addClass('highlight');
  },27000);
    setTimeout(function(){
    $('button#search').removeClass('highlight');
  },33000);
})

  var $buttons = $('button');
  // debugger;


  _.each($buttons, function(button, key, list){
    var audioElement = "audio#" + button.id;
    if(!(audioElement === "audio#help")){
      var $voiceover_audio = $(audioElement)[0];
    // console.log(button);

      $(button).on('mouseenter', function(){
       
        $voiceover_audio.play();
      });
      $(button).on('mouseleave', function(){
        $voiceover_audio.pause();
        $voiceover_audio.currentTime = 0;
      });
      }
    });
  });
