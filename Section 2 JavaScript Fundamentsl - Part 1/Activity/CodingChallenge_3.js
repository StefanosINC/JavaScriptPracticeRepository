/*
1Calculate the average score for each team, using the test data below
2.Compare the team's average scores to determine the winner of the competition and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score
*/
Query();

function DolphinAverageResult(){

    // delcare array
    const Dolphins = [96, 108, 89];
    // Set a toal that is set to change
    let total = 0;
    
    // grab the lenght of the dolphins array and incrementally add them tot he total value
    for(var i = 0; i < Dolphins.length; i++){
        total += Dolphins[i];
    }
    // Query for the average
    
    const average = total / Dolphins.length;

    // print
     return average;  
  
}


function KoalasAverageResult(){


    // declare array 
    const Kaolas = [88, 91, 110];

    let total = 0;

      // grab the lenght of the dolphins array and incrementally add them tot he total value
      for(var i = 0; i < Kaolas.length; i++){
        total += Kaolas[i];
    }
    // Query for the average
    const average = total / Kaolas.length;

    // print
    return average;

}



function Query(){
    if(DolphinAverageResult() < KoalasAverageResult()){
        console.log(" Dolphins Result  :  " + DolphinAverageResult() + " Is Less than the result of  Kolaas " + KoalasAverageResult());
        
    }
    else if(DolphinAverageResult() > KoalasAverageResult()){
        
        console.log(" Dolphins Result  :  " + DolphinAverageResult() + " Is Greater than the result of  Kolaas " + KoalasAverageResult());
        
    }
    else if(DolphinAverageResult() === KoalasAverageResult()){

        console.log(" Dolphins are equal ");
    }
}


    // function Terenery(){

    //     console.log(`Test ${DolphinAverageResult() > KoalasAverageResult() ? 'Dolphin is greater' : 'Koalas is greater' }`);
        
    //     console.log(`Test ${DolphinAverageResult() <  KoalasAverageResult() ? 'Dolphin is less' : 'Koalas is greater' }`);
        
    //     console.log(`Test ${DolphinAverageResult() === KoalasAverageResult() ? 'Dolphin is equal ' : 'Koalas is greater' }`);
        
    // }
    // Print out
    


    
