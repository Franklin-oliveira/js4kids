// Challenge 1: Awesome Animals
// Write a for loop that modifies an array of animals, making them awesome. 
var animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon'];

console.log('before: ', animals);

for (var i =0; i < animals.length; i++){
    animals[i] = 'Awesome ' + animals[i];
};

console.log('after: ', animals)