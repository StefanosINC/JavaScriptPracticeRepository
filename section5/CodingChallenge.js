
let data1 = [17, 21, 23];
let data2 = [ 19, 15, 12, 233, 22];
// console.log(`... ${data1[0]}°C...${data1[1]}°C ...  ${data1[2]}°C.. `);
// Breakign this into subproblems
// Transform an array into String
// Transform each element into string with C 
// String needs to contain a day + index of 1
const printForecast = function(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
    str = str + `${arr[i]}°C in ${i + 1} days... `;
   
    }
    
    // to rmove the *C sign i had to remove it from an array.
    // However generally ti should work with teh array...
     const test = str.replace(/°C/g, '°D');
    console.log(test);
   
    // console.log(str);
    
};
printForecast(data2);

// Write a function that given an array will caculate the possible Tax the user will have to pay Done
// Once you have recieved the tax, Caculate the average amongst the entire list. Done
// Have the flexibility to handle array sizes from 2 to 10. Done
// Return the number and log it as a string saying the max payment in and the min paymeent in

let payments = [100, 200, 300, 500];
const CaculatePayment = (arr) =>{

    // define the tax
    let tax = 0.15;
    let result = '';

    // I am taking each individual multiplication and i am adding it into the string till the last index is reached.
    // Why is it printing not in the 0 index. and it is printing in the normal true position ? where is index 0
    
        
    for(let i = 0; i < arr.length; i++){
        let taxresult = result +  " " + `${arr[i] * tax} value in the array ${arr[i]}`;
        result = taxresult;
    
        // console.log(arr[i]* tax);
        if(arr[i] * tax == 15){
            console.log("there is a result that is equal to 15");
            console.log(` The position in the array where the value is = to 15 is ${arr[i]}`)
        }
        else{
            console.log("false");
        }
        
    }

   
    console.log(result);
   

};
CaculatePayment(payments);

