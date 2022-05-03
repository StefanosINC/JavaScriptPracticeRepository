
/*
Calling a function within a function

*/

// fucntion cut fruit 
function cutFruitPieces(fruit){
    return fruit * 4;
}

// Fruit Processsor
function fruitProcessor(apples, oranges){
    
    // create a variable that calls on the Method of cutting fruit but the variable of pieces.
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    // Juice statement call on the variables implemented.
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;

}

const result = fruitProcessor(2, 3);
console.log(result);