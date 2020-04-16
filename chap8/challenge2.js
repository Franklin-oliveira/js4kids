// Challenge 2: Are these arrays the same?
/* Write a function called areArraysSame that takes two arrays
of numbers as arguments. It should return true if the two
arrays are the same (that is, they have the same numbers
in the same order) and false if they’re different. Try running
the following code to make sure your functions are working
correctly:
        areArraysSame([1, 2, 3], [4, 5, 6]);
        false
        areArraysSame([1, 2, 3], [1, 2, 3]);
        true
        areArraysSame([1, 2, 3], [1, 2, 3, 4]);
        false
*/

function areArraysSame(array1, array2) {
    /*
    p.s.: arrays with different element types return false. 
    ex.: [1, '2'] and ['1', 2] are different.
    */
    if (array1.length !== array2.length) {
        return false;   // arrays are different lengths
    }

    for (i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;  // returns true if all elements are equal and arrays have the same size
};

console.log('Test 1: areArraysSame([1, 2, 3], [4, 5, 6])');
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));

console.log('Test 2: areArraysSame([1, 2, 3], [1, 2, 3])');
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

console.log('Test 3: areArraysSame([1, 2, 3], [1, 2, 3, 4])');
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));