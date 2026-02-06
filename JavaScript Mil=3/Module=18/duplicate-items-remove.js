function removeDuplicateItems(input) {
    let newArray = [];
    for (let item of input) {
        if (newArray.includes(item) !== true) {
            newArray.push(item);
        }
    }
    return newArray;
}

const array = [2, 5, 7, 5, 3, 3, 5, 6, 7, 2, 0, 8, 9, 0,];
const arr  = ['samim','samin','samim']

let finalArray =removeDuplicateItems(arr);
console.log("duplicate item's remove and final result is ->",finalArray);