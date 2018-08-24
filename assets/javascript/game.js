var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log(alphabet);

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
var lettersGuessed = "";

// current name - start as dashes
    var dashes = "<p>" + answerArray.join(" ") + "</p>";
    document.getElementById('currentName').innerHTML = dashes;

    document.onkeyup = function (event) {
        letter = event.key;
        
        // console.log(letter); 
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
            if (name[i] === letter) {
                // console.log(letter);
                answerArray[i] = letter;
                dashes = "<p>" + answerArray.join(" ") + "</p>";
                document.getElementById('currentName').innerHTML = dashes;            
            } // end name=letter


            // if (lettersGuessed.key) {
            //         case "":
            //         console.log("Key pressed");
            //     }
            document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
            };
            // displays the letters the player has already guessed

            }; //end of name.length for loop


        

             
            // if (dashes === 0) {
            //     function increment() {
            //         winCounter++;
            //         console.log(winCounter);
            //     }

            // }
         //end for loop
    // }; //end key event


// show win counter
    var wins = "<p>" + answerArray.join(" ") + "</p>";
    document.getElementById('wins').innerHTML = winCounter;
    // if user correctly completes word, winCounter++;

    // show remaining guess counter
    document.getElementById('guessRemain').innerHTML = guessRemain;

    // show letters guessed display
    // I feel an array push goes here but I don't know how to implement it.




