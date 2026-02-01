let number = 1;
let sum = 0;
while (number > 0) {
    sum += number;
    console.log(sum);
    if (sum >= 100) {
        break;
    }

    number++;
}