/*
Given an array of student objects, print each student’s name and marks.
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

----Expected output:
John scored 85
Alice scored 90

 */


let students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]

for (let student of students) {
    console.log(student)
    console.log(student.name + ' scored ' + student.marks)
}


//-----------------------------------------------------------------

/**Given a 2D array, update the value at second row first item to 99 and print the updated array.
input:
[
  [1, 2],
  [3, 4],
  [5, 6]
]

---------Expected Array:
[
  [1, 2],
  [99, 4],
  [5, 6]
]
 */

let array =[[1, 2],[3, 4],[5, 6]];
array[1][0]=99
console.log(array)

// ---------copy array----------
let arr1=[1,3,5,7]
let arr2=[...arr1];
arr2[0]=77
console.log(arr1,arr2)
