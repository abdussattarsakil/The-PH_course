const numbers = [3, 5, 3, 2, 2, 8, 4]
//console.log(numbers) //array pabo
//console.log(...numbers) //এটা array কে ভেঙে আলাদা আলাদা value বানিয়ে দেয়।
//    ... spread operator


// array/object copy korte spread operator use hoy
const numbers1 = [1, 3, 4, 5, 9, 6, 7, 8,];
const numbers2 = [...numbers1];

numbers2.push(70)
console.log(numbers1, numbers2)
