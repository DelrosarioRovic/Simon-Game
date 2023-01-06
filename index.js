

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var roundLevel = 0;
 
var ifStart = false;

function nextSequence() {
    
   
    roundLevel++;
    $("#level-title").text("Level "+ roundLevel);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var chosenColor = buttonColours[randomNumber];
    $("#"+chosenColor).fadeOut(100).fadeIn(100);
    gamePattern.push(chosenColor);
    playSound(chosenColor); 
    
   
};

function playSound(soundS){
  switch (soundS) {
    case "red":
      var sound = new Audio("sounds/red.mp3");
      sound.play();
      break;
    case "green":
      var sound = new Audio("sounds/green.mp3");
      sound.play();
      break;
    case "blue":
      var sound = new Audio("sounds/blue.mp3");
      sound.play();
      break;
      
    case "yellow":
      var sound = new Audio("sounds/yellow.mp3");
      sound.play();
      break;
      
}; 
};

function checkAnswer(currentLevel){
   
   
    
    if (gamePattern[currentLevel-1] === userClickedPattern[currentLevel-1]) {
      
     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log(gamePattern+userClickedPattern);
      console.log(userClickedPattern);
      setTimeout(function() {
        nextSequence();
        
      }, 1000);
      userClickedPattern = [];
      console.log(userClickedPattern);
     }
      
     
      
      
      
    } else {
      $("#level-title").text("Game Over, Press Any Key to Restart");
      gameOver();

      startOver();
      ifStart = false;
      $(document).keypress(function(event){
        
        if (!ifStart) {
          $("#level-title").text("Level " + roundLevel);
          nextSequence();
          ifStart = true;
        }
       
      
      
      });

    }


};

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");


  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100);
 
}

function gameOver() {
  $("body").addClass("game-over");
      var sound = new Audio("sounds/wrong.mp3");
      sound.play();
 

  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
 
}

function startOver() {
  roundLevel = 0;
  gamePattern = [];
  userClickedPattern = [];
}






$(document).keypress(function(event){
 
  if (!ifStart) {
    $("#level-title").text("Level " + roundLevel);
    nextSequence();
    ifStart = true;
  }
 


});


 



$(".btn").click(function(){
  
  userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
 
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  var clickByTheUser = userClickedPattern.length;

  checkAnswer(clickByTheUser);

});
  
 




