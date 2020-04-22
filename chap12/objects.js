/* Chap. 12 - Object Oriented Programming */

// creating a simple object with a few properties
var dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true,
};

console.log("The dog's name is: " + dog.name);
console.log("It has " + dog.legs + " legs");

// adding a new propertie
dog.age = 6;

console.log(dog);
console.log("\n");

// storing a function as a propertie (creating methods)
dog.bark = function () {
    console.log("Woof woof! My name is " + this.name + "!");
};

dog.bark();


/*** sharing a method between different objects ***/
var speak = function () {
    console.log(this.sound + "!" + " My name is " + this.name + "!");
}

var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};

cat.speak();

// now let's share the speak method with other objects (they just need to have the same properties)

var pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
};

var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
}

pig.speak()
horse.speak()


/*  Creating objects using constructors 
    note: constructor is a function that creates objects and
    gives them a set of built-in properties and methods. 

    to call a constructor:
        var car = new Car(100, 200)  
    
    p.s.: it's convenient do differenciate constructors from ordinary functions
    starting its name with capital letters.

    **continues on cars.html**
*/
