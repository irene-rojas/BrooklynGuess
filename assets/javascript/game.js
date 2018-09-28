$(document).ready(function() {
    // var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // console.log(alphabet);

    // name choice options - console
    var names = ['jake', 'amy', 'gina', 'rosa', 'charles', 'terry', 'holt'];
        console.log(names);

    // name choice - console
    var name = names[Math.floor(Math.random()*names.length)];
        console.log(name);

    var answerArray = [];
        for (var i = 0; i < name.length; i++) {
            answerArray[i] = "_";
        }

    var guessRemain = 10;
    var letter = "";
    var winCounter = 0;
    var lettersGuessed = [];

    // display initial wins
    var wins = 0;
    $("#wins").append(wins);

// current name - start as dashes
    var dashes = "<p>" + answerArray.join(" ") + "</p>";
    $("#currentName").append(dashes);
    
    // record user letters, print, and guessRemain--
    $("#target").bind("keyup", typer);
    function typer(event) {
        letter = event.key;
        lettersGuessed.push(letter);
        // console.log(letter);
        $("#lettersGuessed").append(letter);
        // display remaining guesses
        if (guessRemain == 0) {
            alert(name + " will see you now.");
            location.reload();
        }         
        guessRemain--;
        $("#guessRemain").text(guessRemain + " "); 
        
        for (var i = 0; i < name.length; i++) {
            // console.log(name[i]);
            if (name[i] === letter) {
                    // console.log(letter);
                answerArray[i] = letter;
                dashes = answerArray.join(" ");
                    // console.log(letter);
                $("#currentName").text(dashes);
                
           
            } // end name=letter
            }; //end of for loop
    }

    $("#guessRemain").append(guessRemain);

});