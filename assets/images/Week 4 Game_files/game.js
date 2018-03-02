$(document).ready(function() {




    // A random targetNumber.
    var targetNumber = [];

    // Four different value options for the crystals.
    var valueOption = [1, 5, 7, 15];
    var increment = valueOption[Math.round(Math.random())];

    // The counters to keep track of progress of game.
    var losses = 0;
    var score = 0;
    var wins = 0;

    var crystal1 = [];
    var crystal2 = [];
    var crystal3 = [];
    var crystal4 = [];

    var crystal1 = $(".crystal1");

    // Linking the crystal buttons with the value options.
    var crystalButtons = $(".crystalsImage");

    // Generate targetNumber between 25 and 50 at start of game.
    function startGame() {
        score = 0;
        targetNumber = Math.floor(Math.random() * ((50-25) +1) + 25);
        $(".targetNumber").text(targetNumber); 
        console.log(targetNumber);

        // Assign crystals each a unique valueOption.
        for (i = 0; i < valueOption.length; i++) {

            var crystalsImage = $("<img>");
            crystalsImage.addClass("crystal-image");
            crystalsImage.attr("src", "assets/images/crystal-1.png");
            crystalsImage.attr("data-crystalvalue", valueOption[i]);
            crystalButtons.append(crystalsImage);
        }   
    };

    startGame();

    // On-click event when the user clicks a crystal. 
    $(".crystalButtons").on("click", ".crystal1", function () {
        /* var crystalsValue = ($(.crystalButtons).attr("dataCrystalsValue"));
        crystalsValue = parseInt(crystalsValue); */

        
        score += crystalsValue;
        $(".score").text(score);
        console.log(crystal1);
    })
    .on("click", ".crystal2", function () {
        console.log(crystal2);
    })
    .on("click", ".crystal3", function () {
        console.log(crystal3);
    })
    .on("click", ".crystal4", function () {
        console.log(crystal4);
    });

    // Score goes up by the value of the clicked crystal.







    /*
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
});







