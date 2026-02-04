const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);


//object e key er value dekha
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);




//object e new key and value add
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// car.passenger=5;
Object.assign(car,{"passerner number":5})
console.log(car)