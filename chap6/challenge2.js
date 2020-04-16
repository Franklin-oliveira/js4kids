// Challenge 2: Random String Generator
// Make a random string generator. You'll need to start with a tring containing all the letters in the alphabet:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
};

console.log('The random string is: ', randomString);