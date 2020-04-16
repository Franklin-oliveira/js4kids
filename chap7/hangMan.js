// Creating a Hang Man game in JS
// Design:
// 1. Pick a random word.
// 2. Take the player’s guess.
// 3. Quit the game if the player wants to.
// 4. Check that the player’s guess is a valid letter.
// 5. Keep track of letters the player has guessed.
// 6. Show the player their progress.
// 7. Finish when the player has guessed the word.


console.log('Hang Man - v1.0');

// vocabulary bank
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

// selecting a random word
var word = words[Math.floor(Math.random() * words.length)]; 

// creating answer array
var answer = [];
for (var i=0; i < word.length; i++){
    answer[i] = "_";
}

// initiating some parameters
var remainingLetters = word.length;
var remainingGuesses = 5;


/* Game Loop */
while (remainingLetters > 0 && remainingGuesses > 0) {
    alert('remaining guesses: ' + remainingGuesses + '\n\t' + answer.join(" ")+'\n');  // displays current progress
    
    // checks if the user still has remaining guesses
    if (remainingGuesses === 0){
        alert('Sorry, you were out of guesses...');
        break;
    }

    // collecting user's guess
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase(); // lowering case 
    
    if (guess === null){
        break;    // user wants to quit the game
    } else if (guess.length != 1){
        alert("Please enter a single letter.");
    } else {
        // update the game with the new guess
        var guessCorrectly = false;
        var alreadyGuessed = false;
        for (var j=0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answer[j] === '_') {  // checks if that letter was already guessed
                    answer[j] = guess;
                    remainingLetters--;
                    guessCorrectly = true;  // user guessed correctly
                } else {
                    alert('This letter was already chosen. Please try a different one...');
                    alreadyGuessed = true;
                }
            }
        }
        // BUG if the user keeps guessing the same wrong letter, remaining guesses still decreases
        // counts for wrong guesses
        if (!guessCorrectly && !alreadyGuessed) {
            remainingGuesses--;
        }
    }
}

// once the loop's ended, the game finishes
// alert(answer.join(" "));
alert("The answer was " + word);