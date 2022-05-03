

let Dinner = prompt("Enter your Dinner Bill");
const Tip = (Dinner * 0.2);
alert(`The bill is ${Dinner} Dollars And the Tip for that is ${Tip}`);


let GreaterThan100 = (`${Dinner > 100 ? 'Greater' : "Less"}`);
let LessThan100 = (`${Dinner < 100 ? 'Less Than' : "Greater"}`);
let Equal = (`${Dinner === 100 ? 'Equal' : "N/A"}`);

console.log(GreaterThan100);
console.log(LessThan100);
console.log(Equal);
