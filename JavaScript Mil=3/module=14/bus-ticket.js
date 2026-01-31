const age = 67;
const isStudent = false;

if (isStudent === true) {
    console.log('50% discount')
}

else if (age >= 60) {
    console.log('get 15% discount')
}
else if (age < 10) {
    console.log('baby your ticket is free')
}
else {
    console.log('regular price');
}