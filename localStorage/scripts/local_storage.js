const addNumberToLs = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem('number', number)
}

const getNumberFromLS = () => {
    let number = localStorage.getItem('number')
    const div = document.getElementById('numberDiv')
    console.log(div)
    div.innerHTML = ``
    div.innerText = number
}

const clearDiv = () => {
    const div = document.getElementById('numberDiv')
    console.log(div)
    div.innerHTML = `No Number Available Now`
}

const customer = { name: "sakil", id: 627, product: "8Gb Ram", price: 3200 }

const addObject = () => {
    localStorage.setItem("customer", JSON.stringify(customer))
}

const getObject = () => {
    const user = JSON.parse(localStorage.getItem("customer"))
    console.log(user);
}