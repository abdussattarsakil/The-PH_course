function addition(a, b) {
    return a + b;
}
let total = addition(9, 5);
// console.log(total)


//-------------------------------------------------
/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */

function evenNumbers(array) {
    let evenSum = 0;
    let evenNum=[];
    for (let arr of array) {
        if (arr % 2 === 0) {
            evenSum += arr;
            evenNum.push(arr);
        }
    }
    console.log('Only even numbers ->',evenNum);
    return evenSum;
}

//evenNumbers([8, 4, 10, 8, 8, 5]);

const findEven = evenNumbers([8, 4, 10, 8, 0, 5]);
console.log('sum of even->',findEven);


//--------------------------------------------------------------


const array1=[4,6,7,8,5,2]
let evenSum1 = 0;
for (let arr of array1) {
    if (arr % 2 === 0) {
        evenSum1 += arr;
    }
}
// console.log(evenSum1)