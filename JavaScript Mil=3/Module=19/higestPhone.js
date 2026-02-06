const phones=[
    {name:'samsung',price:20000,camera:'50px',color:'blue'},
    {name:'oppo',price:50000,camera:'50px',color:'off-white'},
    {name:'lenevo',price:40000,camera:'50px',color:'white'},
    {name:'samsung s25 ultra',price:200000,camera:'240px',color:'blue'},
    {name:'moto',price:60000,camera:'120px',color:'green'}
]


function getHigestPhone (phones){
    let higestPhone =phones[0]
    for(let phone of phones){
        if(phone.price>higestPhone.price){
            higestPhone=phone;
        }
    }
    return higestPhone;
}

let result =getHigestPhone(phones);
console.log(result);