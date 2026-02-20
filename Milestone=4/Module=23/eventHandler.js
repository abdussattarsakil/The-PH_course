document.getElementById("btn").addEventListener("click",
    function () {
        //console.log("btn clicked")
        document.getElementById("h1").innerText = "tittle changed."
    }
)

document.getElementById("btn").addEventListener("dblclick",
    function () {
        //console.log("btn clicked")
        document.getElementById("h1").innerText = "tittle changed222."
    }
)


//button ke id die call dilam
document.getElementById("name-save-btn")
    .addEventListener("click", function () {
        //input er lekha ta jekhane jie bosabo sei tag ke akta variable e rakhlam
        const nameUpdate = document.getElementById("user-name");
        //input er value take akta variable e rakhlam- input er lekha value hisabe thake tay .value die dilam
        const inputValue = document.getElementById("input-name").value;
        //input er value take show korailalm
        nameUpdate.innerText = "Your Name: " + inputValue;
    })


    