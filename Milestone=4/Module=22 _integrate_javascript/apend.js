//parent node
let body = document.querySelector("body");

//create child node
const newSection=document.createElement("section");
newSection.innerHTML="<h1>New section create by javascript</h1>"

//append
body.appendChild(newSection);


const foodAdd=document.querySelector("#food-items");
const newList=document.createElement("li");
newList.innerHTML= "fish";
foodAdd.appendChild(newList);

let foodContainer = document.querySelector("#food-container");
foodContainer.classList.add("bg-color");
