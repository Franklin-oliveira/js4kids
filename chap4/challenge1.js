// Scorekeeper
// Imagine you're playing a game with some friends and you want to keep track of the score. 
// Create an object called scores. The keys will be the names of your friends, and the values will be the scores (which will all start at 0).
// As the players earn points, you must increase their scores. How would you increase a player's score in the scores object?

// Solution:
var scores = {};

// creating some players...
scores['Franklin'] = 0;
scores['Ione'] = 0;
scores['Lillyan'] = 0;
scores['Nilson'] = 0;

// showing obj.
console.log('Initial scores:');
console.log(scores)

// increasing one player's score
scores['Franklin'] += 10;  // increased 10 points

console.log('Franklin earned 10 points');
console.log('New scores:\n',scores)