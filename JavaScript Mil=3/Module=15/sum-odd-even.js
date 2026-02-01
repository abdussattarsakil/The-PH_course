//even number sum
let number = 91;
let evenSum = 0;
while (number <= 129) {
    if (number % 2 === 0) {
        evenSum += number;
        // console.log(number);
        console.log(number,evenSum);
    }
    number++;
}


//odd number sum
let oddSum = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 !== 0) {
        oddSum += i;
        console.log(i, oddSum);
    }

}
