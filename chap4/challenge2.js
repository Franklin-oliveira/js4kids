// Digging into objects and arrays
// Say you had the following object:
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
};
// How would you get the number 123 out of this object using one line of JavaScript? 

console.log('We want to get the number 123 out of: ');
console.log(myCrazyObject);

// Solution:
console.log('There it is:');
console.log(myCrazyObject["some array"][2]['number']);