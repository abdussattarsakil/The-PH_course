function itemCount(array, find) {
    let count = 0;
    for (let number of array) {
        console.log(number);
        if (number === find) {
            count++;
        }
    }
    console.log('-------------------------')
    return count;
}

const arr = [4, 45, 4, 4, 6, 2, 9, 7, 8];
const find = 4;
let result = itemCount(arr, find);
console.log(result);