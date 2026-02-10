/**
* Write a function to find the longest word in a given string.
* sample-input: I am learning Programming to become a programmer
* sample-output: Programming
*/

// function longestWord(string) {
//     let str = string.split(" ");
//     // console.log(str)
//     for (let word of str) {
//         // console.log(word);
//         let bigWord = Math.max(word.length);
//         // console.log=(bigWord)
//         if (word.length>bigWord) {
//             console.log(word);
//         }
//     }
// }

// const str = "I am learning Programming to become a programmer";
// let strLongestWord = longestWord(str);
// console.log(strLongestWord);
// longestWord(str);






function longestWord(string) {
    // ১. বাক্যটাকে ভেঙে শব্দের অ্যারে (Array) বানালাম
    let str = string.split(" ");
    
    // ২. একটা ভেরিয়েবল নিলাম যেটা 'সবচেয়ে বড় শব্দ' মনে রাখবে। 
    // শুরুতে এটাকে খালি রাখলাম।
    let longest = ""; 

    for (let word of str) {
        // ৩. লুপের ভেতর চেক করছি: বর্তমান শব্দটা কি আমাদের জমা রাখা শব্দের চেয়ে বড়?
        if (word.length > longest.length) {
            // ৪. যদি বড় হয়, তাহলে 'longest' আপডেট করে নতুন শব্দটা বসিয়ে দেব
            longest = word;
        }
    }
    
    // ৫. লুপ শেষ হলে সবচেয়ে বড় শব্দটা রিটার্ন করবো
    return longest; 
}

const str = "I am learning Programming to become a programmer";
let result = longestWord(str);
console.log(result); // Output: Programming