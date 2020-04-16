// Challenge 3: create two versions of a Random Insult Generator
// one creating the string with + operator, and other using join method

console.log('Random Insult Generator (v1.1)')

// words registries
var bodyParts = ['face', 'nose', 'hair', 'eye', 'ear', 'mouth', 'chin', 'leg', 'foot', 'belly', 'hip'];
var adjectives = ['smelly', 'boring', 'stupid', 'scary', 'insulting', 'morbid', 'sloppy'];
var words = ['fly', 'marmot', 'stick', 'monkey', 'rat', 'elephant', 'garbage'];

// getting random words
var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var randomWord = words[Math.floor(Math.random() * words.length)];

// creating insult
var phrasePlus = 'Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!';
var phrase = ['Your', randomBodyPart, 'is like a', randomAdjective, randomWord, '!!!'];
var insult = phrase.join(' ');

// displaying insult
// console.log('\n');
console.log('- with + op.:', phrasePlus);
console.log('- with join:',insult);

// It is more practical to use .join() method (especially if you're dealing with a large number os words). Although, using + operator 
// gives you more flexibility to customize small phrases anyway you like. So, + is preferrable for small phrases and .join() for large ones.