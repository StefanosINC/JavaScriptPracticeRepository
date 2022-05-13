'use strict';

// constructor  functions and the new Operator
const Person = function(firstName, birthYear){
    // instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create a method inside of a constructor function

    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear);
    // };
}

// instance of Person
const Jonas = new Person('jonas' , 1991);

console.log(Jonas);
// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} Linked to Prototype
// 4. function automaticaly returns {}

const Stefanos = new Person("Stefnaos", 2020);

const Jack = new Person("Jack", 1922);

console.log(Stefanos , Jack);

console.log(Person.prototype);
// ProtoTypes.  // prototype property of the constructor function //(prototype inheritance)
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
}

Stefanos.calcAge();

console.log(Stefanos.__proto__);
console.log(Stefanos.__proto__ === Person.prototype); // interesting Jonas is protype is == to the Person prototype

Person.prototype.species = " Homo Sapiens";
console.log(Stefanos.species, Jonas.species);
console.log(Stefanos);