
// 1 understand the problem
// - what is temperature amplitude?
// It is the difference between the highest and lowest temp

// how to compute the max and min temperatures
// sometimes there might be a sensor error ? and what to do? probably just ignore


//  2 breaking up into sub - problems
// how to ignore errrors
// how to find max value of temp array
// how to find min value in temp array
// subtract min from max(amplitud) and return it 
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const secondTemp = [ 3, 1, 30, 5];

// Merge 2 arrays to caculate the 
const calcTempAplitude = function(t1, t2){

    const temps = t1.concat(t2);
    // console.log(temps);

    // let max = the first positin of the temp array
    let max = temps[0];
    let min = temps[0];
    // loop through the temp array and get the length
    for(let i = 0; i < temps.length; i ++){
        const curTemp = temps[i];
        
          
        if(typeof curTemp !== 'number') continue;

        // if the temps [i] is greater than the max value, then set the max value to that position
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeNew = calcTempAplitude([3,5,1], [9, 1 , 5]);
console.log(amplitudeNew);


const SecondCaculation = calcTempAplitude(temperatures,secondTemp);
// console.log(amplitudeNew);
console.log(SecondCaculation);

// boss now wants to arrays of temps to copmarison

// 2 braek into sub problems
// how to merge 2 arrays