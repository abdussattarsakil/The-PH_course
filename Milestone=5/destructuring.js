//Destructuring হল array বা object থেকে values আলাদা করে সরাসরি variables এ assign করার সুবিধাজনক উপায়


const numbers = [10, 20, 30];
// Old way
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

// Destructuring way
const [x, y, z] = numbers;

//console.log(x, y, z); // 10 20 30


//    <---------------->----------->----------->


//old way
// const product ={
//     name:phone,
//     model:'Samsung',
//     price:25000
// }
// const phoneName=product.name;
// const phoneModel=product.model;




//modern way

//const {name,model}={name:'phone',model:'iphone',price:'heart'};
//console.log(name,model)
//bam pase name likhar mani holo name namer property ta name namer akta variable e value assign hoy

//property er name er sathe mil narekhe onno name e jodi variable declare korte chai

// const {name:productType,model}={name:'smart phone',model:'iphone',price:'heart'};
// console.log(productType);


//const {camera}={name:'smart phone',model:'iphone',price:'heart'};
//console.log(camera); //object er vitor jehutu camera nei tai undefined asbe
//amra chaile akhane akta default value set korte pari - jodi object e thake tahole sei value dibe na thakle default value dibe


const {camera='12 MP'}={name:'smart phone',model:'iphone',price:'heart',};
console.log(camera);
