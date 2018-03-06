$(document).ready(function () {

    // Variables that hold the targetNumber and crystalValues.
    var targetNumber = [];
    var crystalValue = [];
    var increment = crystalValue[Math.round(Math.random())];

    // Variables for the counters to keep track of progress of game.
    var score = 0;
    var losses = 0;
    var wins = 0;

    // Linking the crystal buttons with the value options.
    var crystal1 = $(".crystal-1")

    // Generate targetNumber between 19 and 120 at start of game.
    function startGame() {
        score = 0;
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $(".target-number").text(targetNumber);
        console.log(targetNumber);

        // Assign crystals each a unique valueOption.
        for (i = 0; i < crystalValue.length; i++) {
            var crystalButtons = $(".crystal-buttons");
            crystal1.attr("data-value", Math.floor(Math.random() * 12 + 1));
            crystal1.append(crystalValue);
            console.log(crystalValue);
        }
    };

    startGame();

    // On-click event when the user clicks a crystal. 
    $("body").on("click", ".crystal1", function () {
        score += crystalValue;
        $(".score").text(score);
        console.log(crystalValue);
    });

    // Score goes up by the value of the clicked crystal.


    // User wins if the score matches the targetNumber.
    if (score === targetNumber) {
        alert("You win!");
    }
    if (score >= targetNumber) {
        alert("Sorry, you didn't win this time... Try again!");
    }
});




// var crystalValue = ($(crystalButtons).attr("data-value"));
//        crystalValue = parseInt(crystalValue);


