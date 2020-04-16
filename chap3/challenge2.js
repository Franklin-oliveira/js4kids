// Challenge 2: create a Random Insult Generator
// "Your [body part] is more [adjective] than a [animal]'s [animal body part]"

console.log('Random Insult Generator (v2.0)')

// words registries
var bodyParts = ['face', 'nose', 'hair', 'eye', 'ear', 'mouth', 'chin', 'leg', 'foot', 'belly', 'hip', 'foot', 'arm'];
var adjectives = ['smelly', 'boring', 'stupid', 'scary', 'insulting', 'morbid', 'sloppy', 'big', 'long'];
var animals = ['fly', 'marmot', 'monkey', 'rat', 'elephant', 'hipopotamus', 'whale', 'rhino'];
var animalsBodyParts = ['beak', 'tail', 'claw', 'horn', 'ears', 'nose', 'head']

// getting random words
var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var randomAnimal = animals[Math.floor(Math.random() * animals.length)];
var randomAnimalBodyPart = animalsBodyParts[Math.floor(Math.random() * animalsBodyParts.length)];

// creating insult
var phrase = ['Your ', randomBodyPart, ' is more ', randomAdjective,' than a ',  randomAnimal,"'s ", randomAnimalBodyPart, '!!!'];
var insult = phrase.join('');

// displaying insult
// console.log('\n');
console.log(insult);