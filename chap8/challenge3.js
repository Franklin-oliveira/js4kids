// Challenge 3: HangMan, using functions
/* Go back to your Hangman game from Chapter 7. We’re going
to rewrite it using functions.
I’ve rewritten the final Hangman code here, but with
certain parts of the code replaced by function calls. All you
need to do is write the functions!
*/

// p.s.: to see the answer to this exercise, open file prompt.html in you browser

// Write your functions here
var pickWord = function () {
    var words = [
        "javascript",
        "monkey",
        "awesome",
        "pancake"
    ]
    // Return a random word
    return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
    // Return the answer array
    var answer = [];
    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
    }
    return answer;
};

var showPlayerProgress = function (answerArray) {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));
};

var getGuess = function () {
    // Use prompt to get a guess
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase();
    return guess;
};

var updateGameState = function (guess, word, answerArray) {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    var correctGuesses = 0;
    for (var j = 0; j < word.length; j++){
        if (guess === word[j]){
            answerArray[j] = guess;  // changes are applied inplace (no need to return)
            correctGuesses++;
        }
    }
    return correctGuesses;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    // Use alert to show the answer and congratulate the player
    alert("Good job! The answer was " + answerArray.join(" ") + "!");
};

/* code below is suggested by the author */
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);