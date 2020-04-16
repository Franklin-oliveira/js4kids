// Challenge 1: create a Random Insult Generator

console.log('Random Insult Generator (v1.0)')

// words registries
var bodyParts = ['face', 'nose', 'hair', 'eye', 'ear', 'mouth', 'chin', 'leg', 'foot', 'belly', 'hip'];
var adjectives = ['smelly', 'boring', 'stupid', 'scary', 'insulting', 'morbid', 'sloppy'];
var words = ['fly', 'marmot', 'stick', 'monkey', 'rat', 'elephant', 'garbage'];

// getting random words
var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var randomWord = words[Math.floor(Math.random() * words.length)];

// creating insult
var phrase = ['Your', randomBodyPart, 'is like a', randomAdjective, randomWord, '!!!'];
var insult = phrase.join(' ');

// displaying insult
// console.log('\n');
console.log(insult);