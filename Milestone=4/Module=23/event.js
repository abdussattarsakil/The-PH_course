function makeBlack() {
    document.body.style.backgroundColor = "black";
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

function makeGreen() {
    document.body.style.backgroundColor = 'green'
}

let makeBlue = document.getElementById("make-blue");
makeBlue.onclick = function () {
    document.body.style.backgroundColor = "blue"
}





//addListener
//document.getElementById().addEventListener('event-type',handler/function)
document.getElementById("make-gold").addEventListener("click",
    function () {
        document.body.style.backgroundColor = "gold"
    }
)


let mouseGameBtn= document.getElementById("mouse-game-btn");
mouseGameBtn.addEventListener("mouseover",
    function(){
        document.body.style.backgroundColor="cyan"
    }
)
mouseGameBtn.addEventListener("mouseleave",
     function(){
        document.body.style.backgroundColor="salmon"
    }
)
