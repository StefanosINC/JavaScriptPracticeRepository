

/*const friends1 = 'Michael';
const friends2 = 'Test';

const friends =['friends1', 'friends2', 'friends3'];
console.log(friends);



const years = new Array(123, 345, 567, 789);

console.log(friends[0]);
console.log(friends[1]);

// grab the length of the array
console.log(friends.length);

// grabbing the end of the list ( - works reverse)
console.log(friends[friends.length -1]);

console.log()


// you can declare  and change the array like this 
friends[3] = 'jay';
console.log(friends[3]);

console.log(friends);
 */

// Array Methods

const friends =['friends1', 'friends2', 'friends3'];
console.log(friends);

// add elements
const newLength = friends.push('Jay');

console.log(newLength);
console.log(friends);

// add to the front of the array
friends.unshift('john');

console.log(friends);


// remove elements ( the last one)
    // friends.pop();


// set an object of the popped one
const poppedValue =  friends.pop();
console.log(poppedValue);

// should not have john
console.log(friends);

// remove first element of the array
friends.shift();
console.log(friends);


friends.push(3);
console.log(friends);

friends.push("Jay");
if(friends.includes(poppedValue)){
    console.log(" the value Jay is in your array");
}
else{
    console.log(" none");
}
