// Example of while loop
// Counting sheeps
var asleep = false;
var sheep = 0;

while (! asleep){
    sheep++;
    console.log(sheep, 'sheeps...');

    // condition to fall asleep     
    if (sheep >= 9){
        asleep = true;
        console.log('Zzzzzzzz...');
    }
}
console.log('');

// same result with a for... loop
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++){
    console.log('I have counted ' + sheepCounted + ' sheep!');
}
console.log('Zzzzzzzzzzzzzzzz...')
console.log('');

// for... loops with arrays
var animals = ['Lion', 'Flamingo', 'Polar Bear', 'Boa Constrictor'];

for (var i=0; i < animals.length; i++){
    console.log('The zoo contains a '+animals[i]+'.');
}