
// A random targetNumber.
var targetNumber = [];

// Four different value options for the crystals.
var valueOptions = [1, 5, 7, 15];
var increment = valueOptions[Math.round(Math.random())];

// The counters to keep track of progress of game.
var losses = 0;
var score = 0;
var wins = 0;

// Linking the crystal buttons with the value options.
var crystals = $(".crystalsImage");

// Generate targetNumber between 25 and 50 at start of game.
function startGame() {
    targetNumber = Math.floor(Math.random() * ((50-25) +1) + 25);
    $(".targetNumber").text(targetNumber); 
}};

startGame();

/*// Assigning values to crystals.
    for (var i = 0; i < valueOptions.length; i++) {

    crystals.attr("dataCrystalsValue", valueOption[i]);
    crystal1.append(crystalsImage)
    */



// On-click event when the user clicks a crystal. 
$(".crystalButtons").on("click", ".crystalsImage", function () {

    
    // Determining the crystals value.

    var crystalOptions =[];
    var cry1 = crystalOptions.push((Math.floor(Math.random() * 12 + 1) ) );
    var cry2 = crystalOptions.push((Math.floor(Math.random() * 12 + 1) ) );
    var cry3 = crystalOptions.push((Math.floor(Math.random() * 12 + 1) ) );
    var cry4 = crystalOptions.push((Math.floor(Math.random() * 12 + 1) ) );

    var crystalsValue = ($(this).attr("dataCrystalsValue"));
    crystalsValue = parseInt(crystalsValue);
    
    // Score goes up by the value of the clicked crystal.
    alert("You clicked a crystal");
    /*
    score += crystalsValue;
    console.log(score);
    // $(".score").text(score);
    alert("New score: " + counter);

   // User wins if the score matches the targetNumber.
    if (score === targetNumber) {
       alert("You win!");
    }
    if (score >= targetNumber) {
        alert("Sorry, you didn't win this time... Try again!");
    } 
    else {
       alert("You have a few more guesses!")
    } 
    */

    /* $("body").on("click", ".crystal1" function() {
        alert("You clicked a crystal!");
        score++;
        alert("Your score went up by one");

    })
    */

});



