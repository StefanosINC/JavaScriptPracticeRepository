
// Arrow Functions
const calcAverage = (a, b, c) => (a + b + c ) / 3;

// Check Winner Function
function CheckWinner(avgDolphins, avgKoalas){

    const Dolphin = avgDolphins = calcAverage(1,1,1);
    const Koalas = avgKoalas = calcAverage(400,123,1);

     if(Dolphin > Koalas){
         console.log(` The average of dolphins is greater ${avgDolphins}`);
     }
      if(Dolphin < Koalas){
         console.log(`The dolphins is less than koalas ${Dolphin} ,, ${Koalas}`)
     }
      if(Dolphin === Koalas){
         console.log(`${Dolphin} Draw ${Koalas} Draw`)
        console.log(" This is now equal so it's a draw");
     }
     else{
          return -1;
     }
   
}

CheckWinner();