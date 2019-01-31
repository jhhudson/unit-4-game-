$(document).ready(function(){
    // This is how we generate the random number to match  between 19-120
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log("number-to-match: " + targetNumber);

    // This is how the number is placed in the HTML 
    $("#target-number").text(targetNumber);

    // This is how we generate random number for each crystal between 1-12
    var crystal1 = Math.floor((Math.random() * 12) + 1);
    console.log("crystal-number: " + crystal1);
    var crystal2 = Math.floor((Math.random() * 12) + 1);
    console.log("crystal-number: " + crystal2);
    var crystal3 = Math.floor((Math.random() * 12) + 1);
    console.log("crystal-number: " + crystal3);
    var crystal4 = Math.floor((Math.random() * 12) + 1);
    console.log("crystal-number: " + crystal4);

    // Declaring variables 
    var wins = 0;
    var losses = 0;
    var sum = 0;

    $("#win-count").text(wins);
    $("#losses-count").text(losses);

    // How the game resets 
    function reset(){
        targetNumber = Math.floor((Math.random() * 120) + 19);
        console.log(targetNumber)
        $("#target-number").text(targetNumber);

        crystal1 = Math.floor((Math.random() * 12) + 1);
        crystal2 = Math.floor((Math.random() * 12) + 1);
        crystal3 = Math.floor((Math.random() * 12) + 1);
        crystal4 = Math.floor((Math.random() * 12) + 1);
        sum = 0;
        $("#totalsum").text(sum);
    }

    // adds the wins to the sum 
    function yay(){
        alert("You won!");
        wins++;
        $("#win-count").text(wins);
        reset();
    }

    // adds the losses to the sum 
    function loser(){
        alert("You lose!");
        losses++;
        $("#losses-count").text(losses);
        reset();
    }

    // Sets up the click for the crystals buttons
    $("#button1").on("click", function() {
        sum = sum + crystal1;
        console.log("Score: " + sum);
        $("#totalsum").text(sum);
            // We set win/lose conditions
            if (sum == targetNumber){
                yay();
            }
            else if (sum > targetNumber) {
                loser();
            }
    });

    $("#button2").on("click", function() {
        sum = sum + crystal2;
        console.log("Score: " + sum);
        $("#totalsum").text(sum);
            // We set win/lose conditions
            if (sum == targetNumber){
                yay();
            }
            else if (sum > targetNumber) {
                loser();
            }
    });

    $("#button3").on("click", function() {
        sum = sum + crystal3;
        console.log("Score: " + sum);
        $("#totalsum").text(sum);
            // We set win/lose conditions
            if (sum == targetNumber){
                yay();
            }
            else if (sum > targetNumber) {
                loser();
            }
    });

    $("#button4").on("click", function() {
        sum = sum + crystal4;
        console.log("Score: " + sum);
        $("#totalsum").text(sum);
            // We set win/lose conditions
            if (sum == targetNumber){
                yay();
            }
            else if (sum > targetNumber) {
                loser();
            }
    });

});

