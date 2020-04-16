// Challenge 3: H4ck3r Sp34k
// change normal text into H4ck3r Sp34k. 
// 4 for A; 3 for E; 1 for I and 0 for O.

var input = 'javascript is awesome';
var output = '';

for (var i = 0; i < input.length; i++){
    if (input[i] === 'a'){
        output += '4';
    } else if (input[i] === 'e'){
        output += '3';
    } else if (input[i] === 'i'){
        output += '1';
    } else if (input[i] === 'o'){
        output += 0;     // transforma inteiro em string automaticamente
    } else {
        output += input[i];
    }
};

console.log(input);
console.log(output);