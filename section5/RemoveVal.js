const str = 'hello world';

// in this case. I can simply call the words in this and replace it with @
// It works in this use case. to use an array. The G takes the duplications as well
// I woul dhave taken the capitilzed letters.
const noVowels = str.replace(/[hw]/g, '@');

console.log(noVowels); // 👉️ hll wrld
