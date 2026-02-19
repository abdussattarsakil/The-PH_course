//parent node
let body = document.querySelector("body");

//create child node
const newSection = document.createElement("section");
newSection.innerHTML = "<h1>New section create by javascript</h1>"

//append
body.appendChild(newSection);


const foodAdd = document.querySelector("#food-items");
const newList = document.createElement("li");
newList.innerHTML = "fish";
foodAdd.appendChild(newList);

let foodContainer = document.querySelector("#food-container");
foodContainer.classList.add("bg-color");






const bookSection = document.querySelector("main");
const bookList = document.createElement("section");
bookList.innerHTML =
    `<section>
    <h2>Book Name</h2>
<ul>
    <li>Al-quran</li>
    <li>Hadis</li>
    <li>masala</li>
    <li>islamic kitab</li>
    <li>books</li>
</ul>
</section>`
bookSection.appendChild(bookList);

bookList.classList.add("bg-color")