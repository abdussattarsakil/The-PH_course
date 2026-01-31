let array = ['apple', 'jackfruit', 'orange', 'mango', 'tomato','banana'];
console.log(array[3]);

array[2] = 'jambura'; //2 number index er place e oita bad die new element add dichi

// সিনট্যাক্স: array.splice(শুরুর_ইনডেক্স, কয়টা_ডিলিট_করবেন);
array.splice(4, 2); //4 number index theke suru kore 2 ta delete die dichi

console.log(array);
