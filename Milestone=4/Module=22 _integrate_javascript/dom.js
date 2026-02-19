let list = document.getElementById("players-container")
list.style.background="lightCyan";
//---------------------------------------
//create element and set innerText or innerHTML
const newChild = document.createElement("li");
newChild.innerText = "new born footballer here";

// find the parent where you will add the child
const playersList = document.getElementById("players-list");

// append the child to the parent  -append mani add kora
playersList.appendChild(newChild);
//---------------------------------------