// Challenge 1: Doing arithmetic with functions
/* Create two functions, add and multiply . Each should take
two arguments. The add function should sum its arguments
and return the result, and multiply should multiply its
arguments.
Using only these two functions, solve this simple
mathematical problem:
            36325 * 9824 + 777
*/

var add = function(number1, number2){
    return number1 + number2;
};

function multiply(number1, number2){
    return number1 * number2;
};

console.log('Solving 36325 * 9824 + 777...');
console.log('add(multiply(36325, 9824), 777)');

var result = add(multiply(36325, 9824), 777);

console.log('result: ' + result);
