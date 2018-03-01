

//* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//* Your game will hide this amount until the player clicks a crystal. 

//* When they do click one, update the player's score counter. 

//* The player wins if their total score matches the random number from the beginning of the game. 

// * The player loses if their score goes above the random number. 

//* The game restarts whenever the player wins or loses. 

//* When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero. 

//* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// A random targetNumber.
var targetNumber = [];

// Four different value options for the crystals.
var valueOptions = [3, 5, 7, 10];
var increment = valueOptions[Math.round(Math.random())];

// The counters to keep track of progress of game.
var losses = 0;
var score = 0;
var wins = 0;

// Generate targetNumber between 25 and 50 at start of game.
function startGame() {
    targetNumber = Math.floor(Math.random() * ((50-25)+1) + 25);
    $(".targetNumber").text(targetNumber); 
}

startGame();

// Assigning values to crystals.
for (var i = 0; i < valueOptions.length; i++) {
    
}



// On-click event when the user clicks a crystal. 
$(".crystal-buttons").on("click", ".crystal-image", function () {
    // Score goes up by the value of the clicked crystal.
    alert("You clicked a crystal");
    score += increment;
    alert ("Your score is: " + score);
    $(".score").text(score);

   // User wins if the score matches the targetNumber.
   if (score === targetNumber) {
       alert("You win!");
   }
   // 
   else if (condition) {
       
   } 
   else if (score >= targetNumber) {
       alert("Sorry, you didn't win this time... Try again!");
   }

});



