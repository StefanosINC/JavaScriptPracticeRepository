
// function calcTip that takes any bill value and
// input returns the corresponding tip

const test = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const calcTip1 = function(){
    

    const bills = [125, 555, 44];
    const TipAmount = 0.15;
    let Tips = [bills[0] * TipAmount, bills[1] * TipAmount, bills[2] * TipAmount];
    
    console.log(Tips);

    return Tips;
}


calcTip1();