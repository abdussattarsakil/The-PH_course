//map সবসময় একটা function expect করে

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((num) => {
//   return num * 2;
// });

//console.log(doubled); // [2, 4, 6, 8, 10]
//log(numbers); // [1, 2, 3, 4, 5] ← আসল array অপরিবর্তিত!
const numbers = [1, 2, 3, 4]

const result = numbers.map(num => num * 2)

console.log(result)