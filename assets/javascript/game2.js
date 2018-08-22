var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// possible names
var names = ['jake', 'amy', 'gina', 'rosa', 'charles', 'terry', 'holt'];

// max # of tries
const maxTries = 10;

// stores letters user guessed
var guessedLetters = [];

// index of the current word in the array
var currentWordIndex;

// word we actually build to match
var guessingWord = [];

// How many guesses player has left
var remainingGuesses = 0;

// flag to tell if the game has started
var gameStarted = false;

// flag for 'press any key to try again'
var hasFinished = false;

// how many wins player has
var wins = 0;

// Reset our game-level variables
function resetGame() {
    remainingGuesses = maxTries;
    gameStarted = false;

    // Use Math.floor to round the random number down to the nearest whole.
    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    // Clear out arrays
    guessedLetters = [];
    guessingWord = [];

    // Make sure the hangman image is cleared
    document.getElementById("hangmanImage").src = "";

    // Build the guessing word and clear it out
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    // Hide game over and win images/text
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover-image").style.cssText = "display: none";
    document.getElementById("youwin-image").style.cssText = "display: none";

    // Show display
    updateDisplay();
};

//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        hasFinished = true;
    }
};

document.onkeyup = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};














































var answersArray = [];
    for (var i = 0; i < name.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = name.length;

    while (remainingLetters > 0) {
        alert(answersArray.join(" "));

    var guess = prompt("Press any letter to begin!");
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert("please enter a single letter.");
            } else {
                for (var j = 0; j < name.length; j++) {
                    if (name[j] === guess) {
                        answersArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }
        }

        alert(answersArray.join(" "));
        alert("You detective is " + name);
  







    
    // document.onkeyup = function() {
    // alert("working");

    // computer chooses a name
    // var computerGuess = names[Math.floor(Math.random()*names.length)];

    // console.log(computerGuess);


    // user chooses a letter
    // var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // console.log(userGuess);

    // if userGuess comes from var alphabet, they have chosen correctly on click.

        // if (userGuess == 'a' || userGuess == 'b' || userGuess == 'c') { 
            // alert("chosen correctly");
            // if userGuess is letter in computerGuess name, show letter in corresponding location.
        // } else {
            // alert("Please choose a, b, or c");
            // }
        // }

        // document.querySelector('#game').innerHTML = html;
    // }
    // end function


    
    
    
    
    
    
    
    
    
    
    
    //  || userGuess=== 'd' || userGuess=== 'e' || userGuess=== 'f' || userGuess=== 'g' || userGuess=== 'h' || userGuess=== 'i' || userGuess=== 'j' || userGuess=== 'k' || userGuess=== 'l' || userGuess=== 'm' || userGuess=== 'n' || userGuess=== 'o' || userGuess=== 'p' || userGuess=== 'q' || userGuess=== 'r' || userGuess=== 's' || userGuess=== 't' || userGuess=== 'u' || userGuess=== 'v' || userGuess=== 'w' || userGuess=== 'x' || userGuess=== 'y' || userGuess=== 'z') {   
