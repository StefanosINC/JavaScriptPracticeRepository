
const Jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, 


    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    calcAge: function(){
        console.log(this);
        console.log("Object Functions");
        return 2037 - this.birthYear;
    },

    GetSummary: function(){
        return `${this.firstName}, ${this.lastName}, ${this.birthYear}, ${this.job}, ${this.friends}, ${this.hasDriversLicense}`;
    }


};
console.log(Jonas.GetSummary());


// remember that calcage in this case an expression would need 
// to be referenced as astring 
// console.log(jonas['calcAge'](1991));

// function GetSummary(String){


// }
