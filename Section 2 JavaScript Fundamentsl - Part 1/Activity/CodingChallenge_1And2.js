/*
The challenge of this coding problem was to 
caculate the converion method in a function and solve a problem.
We worked with an if else and set some boolean values
*/



// Declare Variables for weight and height for John/Mark
const MarksWeight = 78;
const MarksHeight = 1.88;
const JohnWeight = 92;
const JohnHeight = 1.95;

// Declare Booleans
markHigherBMI = false;
johnHigherBMI = false;

// Conversion
const MarksBMI = MarksWeight / (MarksHeight * MarksHeight);
const JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

MarkBMIMethod();

function MarkBMIMethod() {

    if(MarksBMI > JohnBMI){
        console.log(MarksBMI);
        console.log(JohnBMI);
        console.log("Marks BMI is higher");
        markHigherBMI = true;
    }
    else{
        console.log(" Johns BMI is higher " + JohnBMI + "    " +  " Marks BMI is: " + MarksBMI );
         console.log(markHigherBMI);
         
    }
}





