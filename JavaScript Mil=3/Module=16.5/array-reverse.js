//----------reverse method----------
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors.reverse());


//---------without reverse method----------
let newArray = [];
for (let rev of colors) {
    newArray.unshift(rev);
}
// console.log(newArray);



//-----------use for loop method-------------
let newReverse=[];
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
    newReverse.push(colors[i])
}
console.log(newReverse);