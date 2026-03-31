const addNumberToLs=()=>{
    const number=Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number',number)
}

const getNumberFromLS=()=>{
    let number=localStorage.getItem('number')
    const div=document.getElementById('numberDiv')
    console.log(div)
    div.innerHTML=``
    div.innerText=number
}

const clearDiv=()=>{
    const div=document.getElementById('numberDiv')
    console.log(div)
    div.innerHTML=`No Number Available Now`
}

