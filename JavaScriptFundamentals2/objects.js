

const jonasArray = [
    'Jonas',
    'Schemdtann',
    2037-1991,
    'teacher', 
    ['Michael', 'Peter', 'Stevem']

];

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

// console.log(jonas.lastName);
// console.log(jonas['lastName']);


// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);


// const interestedIn = prompt("What do you want to know about jonas firstName, lastName, age, job, and friends");
// console.log(jonas.interestedIn);
1
// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);

// }
// else{
//     console.log("Wrong request choose between a proper name");
// }


const jonasFriends = {
    firstname : []
}

const Friend1 = prompt("Enter a first name of a friend");
const Friend2 = prompt(" Enter another name");

jonasFriends.firstname.push(Friend1);
jonasFriends.firstname.push(Friend2);

 console.log(jonasFriends.firstname);
