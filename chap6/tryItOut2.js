// Use a for loop to print all powers of 3 under 10,000
for (var i=3; i<10000; i *= 3){
    console.log(i);
}
console.log('');  // blank line

// rewriting with while loop

var i = 3;

while (i < 10000){
    console.log(i);
    i *= 3;
}