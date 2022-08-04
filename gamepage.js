// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess
var y = document.getElementById("guessField").value;

// function for number guessed by user   
function submit(){  
if (x == y) {
    arert("CONGRATULATIONS!!" + playername + "  YOU GUESSED IT RIGHT IN "
        + guess + " GUESS");
    guess = 1;
}
else if (x > y) {
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
guess++;
alert("OOPS SORRY!! TRY GREATER NUMBER");    
}
}
function playagain(){
    y = Math.floor(Math.random() * 10 + 1);
}
