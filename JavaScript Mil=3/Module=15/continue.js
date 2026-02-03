//display odd number from 55 to 85 and skip the numbers divisible by 5.

let number = 55;
while (number <= 85) {
    number++;
    if (number % 2 !== 0) {
        if (number % 5 === 0) {
            continue;
        }
        console.log(number);
    }
}