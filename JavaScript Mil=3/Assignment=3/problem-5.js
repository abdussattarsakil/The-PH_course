function analyzeText(str) {
    if (typeof (str) !== "string" || str==="") {
        return "Invalid";
    }
    let result = { longwords: "", token: 0 }

    for (let word of str.split(" ")) {
        result.token+=word.length;
        if (result.longwords.length < word.length) {
            result.longwords = word;
        }
    }

    return result;
}


const a = ""
const result = analyzeText(a);
console.log(result);