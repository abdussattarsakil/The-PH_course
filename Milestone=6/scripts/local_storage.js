const addNumberToLs=()=>{
    const number=Math.ceil(Math.random()*100)
    console.log(number);
    localStorage.setItem('number',number)
}

