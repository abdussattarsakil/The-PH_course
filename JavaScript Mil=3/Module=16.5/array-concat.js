var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
console.log(numbers.join(''));



//use for of loop
let str ="";
for(let concat of numbers){
    str+=concat;
}
console.log(str);
console.log(typeof(str));
