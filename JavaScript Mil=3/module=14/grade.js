// with ternary
const mark = 79;
let result = 0;

result = mark >= 90 ? "A" :
    mark >= 80 ? "B" :
        mark >= 70 ? "C" :
            mark >= 60 ? "D" :
                mark >= 0 ? "fail" : "";

console.log(result);