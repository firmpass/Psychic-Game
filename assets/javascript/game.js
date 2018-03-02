alert("Welcome to The Phenomenal Psychic Game!?!?");


var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessedLetter = [];
var wins, loss, scores, correctltr;                    
wins = 0;
loss = 0;                
scores = [0,0];
guessLeft = 10;




var losses = document.querySelector("#ls");
var wins = document.querySelector("#ws");

var runRandomLetter = function(){
randomLetter = letters[Math.floor(Math.random() * letters.length)];
};

var runGuessSoFar = function(){ document.querySelector("#ltrGuess").innerHTML = guessLeft;
};

var runGuessLeft = function(){ document.querySelector("#gQuant").innerHTML = guessedLetter.join(", ");
};



gameReset = function(){
    guessLeft = 10;
    guessedLetter = [];
    runRandomLetter();
    runGuessLeft();
    runGuessSoFar();
};

runRandomLetter();
runGuessLeft();

document.onkeyup = function(event){
    guessLeft--;
    var guess = String.fromCharCode(event.keycode).toLowerCase(); 
    guessedLetter.push(guess);
    runGuessLeft();
    runGuessSoFar();


    if (letterGuess === randomLetter) {
    win++;
    document.querySelector("ws").innerHTML = wins;

    gameReset();
    }

    else (guessLeft === 0) 
    loss++;
    document.querySelector("ls").innerHTML = loss;

    gameReset();
    }








// for(var x = 0; x < letters.length; x++) {
//     onkeyup(ltrGuess); 
// }   

// Random letter generator
// var randomltr = "";
// while (randomltr.length < 1) {
//     randomltr += letters[Math.floor(Math.random() * letters.length)];
// }
// console.log(randomltr);
// var emptyString = "";
// var randomLetter = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// function getRandomLetter() {
//     randomLetter = alphabet.charAt(Math.floor(Math.random() * 25));
//         console.log(randomLetter);
// };

// upon game beginning run getRandomLetter

// once game is over run function getRandomLetter to reset game to beginning

// while (emptyString.length < 1) {
//   randomLetter = getRandomLetter();
//   emptyString += randomLetter;
// } 
// console.log(emptyString);


// guessed letter
window.addEventListener("keyup", letterGuess, false);

function letterGuess(guessedltr){
    if (guessedltr == randomLetter){
        alert("You're Correct!!!");
    }
}
// if letter guess correct add 1 to win


// if guesses left run out add 1 to losses

   //You get 5 guesses

   //Print guesses.


// post letter guesses to Guesses so far area


// *Add Reset Button to clear out Wins, Losses, Guesses so Far*

