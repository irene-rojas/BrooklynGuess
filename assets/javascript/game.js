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

var remainingLetters = name.length;

// the game
while (remainingLetters > 0) {
    console.log(answerArray.join(" "));
    var guess = console.log("Guess a letter");
    if (guess === null) {
        break;
    } else {
        for (var j = 0; j < name.lenth; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// document.write(answerArray.join(" "));
document.write("Detective " + name + " will see you now.");

