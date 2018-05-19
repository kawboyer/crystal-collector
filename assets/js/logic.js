// GLOBAL VARIABLES

// Crystal Variables
var crystal = {
  blue: 
  {
    name: "Blue",
    value: 0
  },
  orange:
  {
    name: "Orange",
    value: 0
  },
  pink:
  {
    name: "Pink",
    value: 0
  },
  purple:
  {
    name: "Purple",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and losses 
var winCount = 0;
var lossCount = 0;


// FUNCTIONS

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Strat the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.orange.value = getRandom(1, 12);
  crystal.pink.value = getRandom(1, 12);
  crystal.purple.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  // console.log("--------------------------------------------------------");
  // console.log("Target Score: " + targetScore);
  // console.log("Blue: " + crystal.blue.value + " | Orange: " + crystal.orange.value + " | Pink: " + crystal.pink.value + " | Purple: " + crystal.purple.value);
  // console.log("--------------------------------------------------------");
};

// Respond to clicks on the crystals
var addValues = function(crystal) {
  currentScore = currentScore + crystal.value;
  // console.log("Your score : " + currentScore)

  $("#yourScore").html(currentScore);

  // Call the checkWin Function
  checkWin();
};

// Check if user won or lost. Reset the game.
var checkWin = function() {
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    // console.log("You lost")

    // Add to lossCount
    lossCount++;
    $("#lossCount").html(lossCount);

    // Restart the game
    startGame();
  }
  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    // console.log("You Won!");

    // Add to winCount
    winCount++;
    $("#winCount").html(winCount);

    // Restart the game
    startGame();
  }
};

// MAIN PROCESS

// Starts the game the first time
startGame();

$("#blue").on("click", function() {
  addValues(crystal.blue);
});

$("#orange").on("click", function() {
  addValues(crystal.orange);
});

$("#pink").on("click", function() {
  addValues(crystal.pink);
});

$("#purple").on("click", function() {
  addValues(crystal.purple);
});