//Check whether a string contains all the vowels a, e, i, o, u

let str = "The quick brown fox jumps over the lazy dog";
// সব ছোট হাতের করে নিলাম যাতে A এবং a তে ঝামেলা না হয়
let lowerStr = str.toLowerCase(); 
const vowels = 'aeiou';

let isAllPresent = true; // ধরে নিলাম সব ভাওয়েল আছে

for (let check of vowels) {
    // যদি বর্তমান ভাওয়েলটি স্ট্রিং-এ না থাকে (!)
    if (!lowerStr.includes(check)) { 
        isAllPresent = false; // ফ্ল্যাগ false করে দিলাম
        break; // আর চেক করার দরকার নেই, লুপ থামাও
    }
}

if (isAllPresent) {
    console.log('All vowels are available! ✅');
} else {
    console.log('Not all vowels are present ❌');
}