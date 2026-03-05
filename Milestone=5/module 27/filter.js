const arr1 = [1, 23, 7, 45, 4, 3, 2, 22, 5]
const arr2=[2,3,4,5,6,7,8,9,1,12,34,65,76,23]
const oddNumbers = arr1.filter(num => num % 2 !== 0)
console.log(oddNumbers);


//reusable function 
const evenFunction = numbers => numbers.filter(num => num % 2 === 0)
console.log(evenFunction(arr1),'arr1');
console.log(evenFunction(arr2),'arr2');

