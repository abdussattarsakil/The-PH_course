const products =[
    {name:'shampoo',price:300,quantity:2},
    {name:'chiruni',price:100,quantity:3},
    {name:'shirt',price:700,quantity:5},
    {name:'pant',price:1200,quantity:1},
]

function productsSum(products){
    let totalPrice=0;
    for(let product of products){
        totalPrice+=product.price*product.quantity;
    }
    return totalPrice;
}
const totalPrice=productsSum(products);
console.log(totalPrice);
