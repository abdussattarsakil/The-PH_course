// fetch("https://jsonplaceholder.typicode.com/todos/1")
// //Server-এ request পাঠাচ্ছে
// .then(res=>res.json())
// //Server থেকে আসা response কে JSON এ convert করছে
// .then(data=>console.log(data))
// //Final data আমরা পাচ্ছি



const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}

const displayPost = posts => {
    //console.log(posts)
    // 1. get parent container
    const postContainer=document.getElementById("post-container")
    postContainer.innerHTML=``;
    //console.log(postContainer)

    posts.forEach(post => {
        // 2. create child
        const li=document.createElement("li")
        li.classList.add("text-red-400",'border','p-5','m-3')
        //console.log(post.id, post.title)
        li.innerText=post.title
        

        //3. append child-parent container e add
        postContainer.append(li)
    });
}
loadPost();