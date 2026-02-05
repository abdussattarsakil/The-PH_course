//Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
    teacher:'ph hero'
};
let keyCount=0;
for (let check in student){
    keyCount++;
}
console.log(keyCount)




//Loop through an object and print the key-value pairs with their types

//output :
//  key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let citygen = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let task in citygen){
    console.log('key',task,'|','type:',typeof(citygen[task]))
}
