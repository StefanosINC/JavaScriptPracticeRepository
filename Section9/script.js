'use strict';

/*
Deconstructing Arrays ***********************************************
* Purpose: 
*/

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,

    },
    fri: {
      open: 11,
      close: 23,

    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },

  }, 

  order: function(starterIndex, mainIndex){
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order recieved ${this.starterMenu[starterIndex]} and this 
    ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);


  },
  orderPizza: function(mainIngredient, ...otherIngrediants){
    console.log(mainIngredient);
    console.log(otherIngrediants);

  }
};

restaurant.orderDelivery({
  time: '22: 30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,

})

// const array = [2,3,4];
// const a = array[0];
// const b = array[0];
// const c = array[0];


// destructuringaadsf
// const [x,y,z] = array;
// console.log(x,y,z);
// console.log("here");
// console.log([x,y,z]);

// i skipped the 2nd variable to grab the first an 3rd one

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variable ****
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);


console.log(restaurant.order(2,0));

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);


// Nested destructuring
const nested = [2, 4, [5,6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i,j,k);


// Default Values
const [p=1, q=1, r=1] = [8];
console.log(p, q, r);



/*********************************************
 * Destructoring Objects 
 * 
 */

 const{name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
const{name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);


// default values

// default value if it doesnt exist
const {menu = [], starterMenu: starters = []} = restaurant;
// when we don thave data hard coded this is all a good method. 
console.log(menu, starters);


// mutating variables
let num1= 111;
let num2 = 999;

const obj = {
  num1: 24, 
  num2: 7, 
  num3: 14
};
// now the variables i set are == to the ones in the object. 
({num1,num2} = obj);

console.log(num1,num2);


// nested objects
const {
  fri: {
    open: o, 
    close: c,
  }}= openingHours;
console.log(o, c);

/*
 * The Spread Operator **************
 * When we want to seperate things with a comma itsgenerally best used. 
 * You will hav ea hard time with other use cases for ex `${... wont work}
 */

 const arr = [7,8,9];
 const badNewArr = [1,2];

 // the spread operator actually pulls them out of the array and combines it
 
 const newArr = [1, 2, ...arr];
 console.log(newArr);
 console.log(...newArr);

 // combining this into a new array
 const newMenu = [...restaurant.mainMenu, 'Gnocci'];
 console.log(newMenu);

 // Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays or more
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// iterables array strings, maps or sets, NOT OBJECTs
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);


// Real World Example
// building a prompt option with storing things in the ingrediant array

/*const ingredients = [
  prompt('Lets\s make pasta! Ingrediant 1?'),
  prompt('Ingrediant 2?'),
  prompt('Ingrediant 3')
];
 */
// expanding the elements of the ingredeiants
// restaurant.orderPasta(...ingredients);
// console.log(ingredients);

// Copy Objects / More manipulation
const newRestauraunt = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestauraunt);
console.log(newRestauraunt.starterMenu);
console.log(newRestauraunt.founder);

const restaurantCopy = {
  ...restaurant
};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);



// Some destructoring
/*
Rest Pattersn and Parameters ***********************
*/

// Spread, because on Right side of the  = 
const ARR123 = [1,2, ...[3,4]];

// REST, because on the LEFT side of the = sign
const [a,b, ...others] = [1,2,4,5,6];
console.log(a,b, others);

const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, Risotto, otherFood);
console.log(otherFood);

// Objects
 const {
   sat,
  ...weekdays
  } = restaurant.openingHours;
console.log(weekdays);

// Functions
// rest parameters
const add = function(...numbers){
 
  let sum = 0;
  for(let i = 0; i<numbers.length; i ++){
    // sum = sum + numbers[i]
    sum += numbers[i];

  }
  console.log(sum);
}
console.log("Add Function Rest Parameter Testing");
console.log("===============");
add(2,3)
add(5,3,7,2)
add(8,2,5,3,1,2,5,7,7,2,1);



const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'olives', 'Spinache');
restaurant.orderPizza('mushrooms');