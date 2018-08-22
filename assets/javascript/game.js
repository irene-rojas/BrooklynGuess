// var names = ["jake", "amy", "gina", "rosa", "charles", "terry", "holt"];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var names = ['jake', 'amy', 'gina', 'rosa', 'charles', 'terry', 'holt'];
var wins = 0;
var guessRemain = 0;
var lettersGuessed 

var name = names[Math.floor(Math.random()*names.length)];

var answersArray = [];
    for (var i = 0; i < name.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = name.length;









    
    document.onkeyup = function() {
    // alert("working");

    // computer chooses a name
    var computerGuess = names[Math.floor(Math.random()*names.length)];

    console.log(computerGuess);


    // user chooses a letter
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);

    // if userGuess comes from var alphabet, they have chosen correctly on click.

        if (userGuess == 'a' || userGuess == 'b' || userGuess == 'c') { 
            // alert("chosen correctly");
            // if userGuess is letter in computerGuess name, show letter in corresponding location.
        } else {
            alert("Please choose a, b, or c");
            }
        }

        document.querySelector('#game').innerHTML = html;
    // }
    // end function


    
    
    
    
    
    
    
    
    
    
    
    //  || userGuess=== 'd' || userGuess=== 'e' || userGuess=== 'f' || userGuess=== 'g' || userGuess=== 'h' || userGuess=== 'i' || userGuess=== 'j' || userGuess=== 'k' || userGuess=== 'l' || userGuess=== 'm' || userGuess=== 'n' || userGuess=== 'o' || userGuess=== 'p' || userGuess=== 'q' || userGuess=== 'r' || userGuess=== 's' || userGuess=== 't' || userGuess=== 'u' || userGuess=== 'v' || userGuess=== 'w' || userGuess=== 'x' || userGuess=== 'y' || userGuess=== 'z') {   
