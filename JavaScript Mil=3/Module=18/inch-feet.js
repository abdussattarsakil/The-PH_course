//1 feet =12 inch

const hight = 75;
let hightFeet = hight / 12;
let hightInch = hight % 12;
console.log(parseInt(hightFeet), 'Feet', hightInch, 'Inch');

//-----------------------------------------------------------------


function hightCalculator(hight) {
    let hightFeet = hight / 12;
    let hightInch = hight % 12;
    console.log(parseInt(hightFeet), 'Feet', hightInch, 'Inch');
}

// hightCalculator(80);