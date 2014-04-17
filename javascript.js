$(document).ready(function(){
alert("Welcome to Box-O-Fun!");
  alert("You think you're smart?");
  alert("Good, cause only GENIUSES can solve this puzzle!");
  alert("The aim of the game is to make all of the boxes the same color.")
  alert("Click on the boxes to make them change colors!")
  alert("But wait! You can only make them change colors once. You'll have to click every block in order to change the color a second time.");
  alert("Make sure you turn up your sound to enjoy the full potential of this lively game!");
  $('#firstblock').click(function(){
 
    $('#firstblock').css("background-color", "blue");
     var sound2 = new Audio("http://soundjax.com/reddo/26144%5EBONK2.mp3");
  sound2.play();

});
  $('#secblock').click(function(){
    
  $('#secblock').css("background-color", "green");
   var sound2 = new Audio("http://soundjax.com/reddo/26144%5EBONK2.mp3");
  sound2.play();

});
   $('#thirdblock').click(function(){
    
  $('#thirdblock').css("background-color", "red");
        var sound2 = new Audio("http://soundjax.com/reddo/26144%5EBONK2.mp3");
  sound2.play();


});
   $('#fourthblock').click(function(){
    
  $('#fourthblock').css("background-color", "blue");
      var sound2 = new Audio("http://soundjax.com/reddo/26144%5EBONK2.mp3");
  sound2.play();

   });
$('#fifthblock').click(function(){
    $('div').fadeOut('fast');
 $('#scary').delay(600).fadeIn('fast');
  var sound = new Audio("http://soundjax.com/reddo/30594%5EWitchScream2.mp3");
  sound.play();
   });
  $('#sixthblock').click(function(){
       var sound2 = new Audio("http://soundjax.com/reddo/26144%5EBONK2.mp3");
  sound2.play();

  $('#sixthblock').css("background-color", "yellow");
   });
 
  
});
