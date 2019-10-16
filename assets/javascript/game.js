//computer can choose random letter
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = ""
var losses = 0
var guesses = 10
var wins = 0
var guessedLetters = []


document.onkeyup = function (event) {
  var computer = letters[Math.floor(Math.random() * letters.length)];
  var userGuess = (event.key.toLowerCase());
  var guessedLetters = letters[Math.floor(Math.random() * letters.length)];
  console.log(guessedLetters)


function resetGame() {
    var computer = letters[Math.floor(Math.random() * letters.length)];
    console.log(computer)
}


function win() {
    wins++;
    resetGame();
  }
  function lost() {
    losses++;
    resetGame();
  };

  //function guesses() {
    //guesses--;
    //resetGame();
  //}

document.getElementById("wins").innerHTML = wins

document.getElementById("losses").innerHTML = losses

document.getElementById("guesses").innerHTML = guesses 

document.getElementById("guessedLetters").innerHTML = guessedLetters


//document.getElementById("guesses-so-far").innerHTML = your guesses so far;

//document.getElementById("your guesses so far").innerHTML = your guesses so far

console.log(computer)
console.log(userGuess)

        if (userGuess === computer) {
            wins++;
            guessedLetters++;
            guesses = 10;
            userChoices = [];
        }
        if (guesses === 0) {
          //lossess++
        } else {
            losses++;
            userChoices = [];
            guesses--
          
        } 

  };

