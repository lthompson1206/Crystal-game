function Random() {
    var rnd = Math.floor(Math.random() * 120);
    document.getElementById('tb').value = rnd;
}

var targetNumber = 120;
$("#number-to-guess").text(targetNumber);
var counter = 0;
var targetDiv = document.getElementById("scoreDisplay-div");

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var increment = numberOptions[Math.round(Math.random())];
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += Math.floor(Math.random() * 12);;
    
    $("#result").html("new score" + counter);


    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
    }
});
