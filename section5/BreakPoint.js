const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'cels', 
        // declaring things as numbe rin prompt
        value: Number(prompt('Degrees Celsius:')),

    };
    console.log(measurement);

    console.table(measurement);
    
//     // check if it it''s a number
//     if(measurement.value > 10 ){

//         console.log("numbe ris 10 ");
//     }
// ;
    const kelvin = measurement.value + 273;
    return kelvin;
}
// A Identify the bug 
// B 
console.log(measureKelvin());