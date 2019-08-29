// CREATE VARIABLES 
// ------------------

// WINS
var wins = 0;
// LOSSES
var losses = 0;
// GUESSES MADE
var guessMade = [];
// GUESSES LEFT
var guessLeft = 9;
// USERGUESS
var userGuess;
// COMPUTERGUESS
var computerGuess;
// COMPUTER CHOICES
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// DISPLAYTEXT
var displayText = " ";

// FUNCTIONS 
// ------------------

// DISPLAY RESULTS TO PAGE(DOM)
function updateDisplay() {
    document.querySelector("#displayText").innerHTML = displayText;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#guessMade").innerHTML = guessMade;
};

updateDisplay();

// GENERATE A RANDOM LETTER FOR COMPUTER
function computerRandomLetter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    
};

// RESET SCORES
function resetScores() {
    guessMade = [];
    guessLeft = 9;
};

computerRandomLetter();
console.log(computerGuess);


// ONKEYUP EVENT FUNCTION TO GRAB USERGUESS

document.onkeyup = function (event) {
    var userGuess = event.key;
    
    console.log(userGuess);
    
    
     
    // console.log(userGuess);
    if (userGuess === computerGuess) {
        wins++;
        displayText = "You've Won! :)";
        resetScores();
        console.log(wins);
        computerRandomLetter();
        console.log(computerGuess);
    }
    else {
        guessLeft--;
        guessMade.push(userGuess);
        
  

     if (guessLeft === 0) {
        losses++;
        displayText = "You've Lost :(";
        resetScores();
        console.log(losses);
        computerRandomLetter();
        console.log(computerGuess);
     }
    };

      updateDisplay()
}


// note: how to make innerHTML work in external javascript file