$(document).ready(function () {

    // Variables that hold the targetNumber and crystalValues.
    var targetNumber;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;

    // Variables for the counters to keep track of progress of game.
    var score = 0;
    var losses = 0;
    var wins = 0;

    // Linking the crystal buttons with the value options.

    // Generate targetNumber between 19 and 120 at start of game.
    function startGame() {
        score = 0;
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $(".target-number").text(targetNumber);
        console.log(targetNumber);

        crystal1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        console.log(crystal1);
        crystal2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        console.log(crystal2);
        crystal3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        console.log(crystal3);
        crystal4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
        console.log(crystal4);

        // On-click event when the user clicks a crystal. 
        $(".crystal-1").on("click", function () {
            console.log("hello");
            score += crystal1;
            $(".score").text(score);
            console.log(score);
        });

        $(".crystal-2").on("click", function () {
            console.log("hello");
            score += crystal2;
            $(".score").text(score);
            console.log(score);
        });

        $(".crystal-3").on("click", function () {
            console.log("hello");
            score += crystal3;
            $(".score").text(score);
            console.log(score);
        });

        $(".crystal-4").on("click", function () {
            console.log("hello");
            score += crystal4;
            $(".score").text(score);
            console.log(score);
        });

        if (score > targetNumber) {
            alert("Sorry, you didn't win this time... Try again!");
            startGame();
        }
        else if (score === targetNumber) {
            alert("You win!");
            startGame();
        };
    };

    startGame();
});

