//function declaration-----(traditional function)
function add(a, b = 0) {   //b=0 mani hole parameter e b er man na dile seta default value 0 hobe
    const result = a + b;
    return result;
}
console.log(add(5));



//function expression------
const add2 = function (a, b) {
    return a + b;
}
console.log(add2(2, 5))



//arrow function-------
const add3 = (a, b) => a+b;
console.log(add3(5,7));
