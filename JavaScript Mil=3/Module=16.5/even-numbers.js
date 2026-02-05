const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers=[];
for (let check of numbers){
     if(check%2===0){
     evenNumbers.push(check);
     }
}
console.log(evenNumbers)