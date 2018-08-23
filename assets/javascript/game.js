var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(alphabet);

// name choice options
var names = ['jake', 'amy', 'gina', 'rosa', 'charles', 'terry', 'holt'];
console.log(names);

var start = document.querySelector("#start");

document.getElementById("start").addEventListener("click", function() {
    var name = names[Math.floor(Math.random()*names.length)];
    console.log(name);

}
);

start.onclick = function() {

}














// initialize game
document.onkeyup = function() {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        // console.log(userGuess);

        if ((userGuess===alphabet)) {
            
            // computer chooses one name
            var name = names[Math.floor(Math.random()*names.length)];
                console.log(name);

                // show dashes instead of word
                var answersArray = [];
                for (var i = 0; i < name.length; i++) {
                    answerArray[i] = "_ ";
                }
        }





// create key event and identify letter chosen
// if key clicked, store letter in an array to track progress
document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();

}

// save chosen letter in array
// const

// identify whether chosen letter is in selected word

// if letter is in word, replace a dash with that letter

// document.getElementById


}
// initialize game tag