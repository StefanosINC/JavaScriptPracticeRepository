

function calcAge1(birthYear){
    
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age);


// set a variable to a function 
// anonymous function  this is an expression

const calcage2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcage2(1991);

console.log(age1, age2); 