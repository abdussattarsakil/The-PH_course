const input = { "right": 67, "wrong": 23, "skip": 10 };

function finalScore(omr) {
    const sum = omr.right + omr.wrong + omr.skip;
    if (sum !== 100) {
        return "Invalid";
    }
    
    let result=(omr.right*1)-(omr.wrong/2);
    let finalResult=Math.round(result);
    return finalResult;
}


const result = finalScore(input);
console.log(result)