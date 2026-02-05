function oddAverage(numbers){
    let oddCount=0;
    let oddNumbers=0;
    let oddArr=[];
    for(let number of numbers){
        if(number%2!==0){
            oddCount++;
            oddNumbers+=number;
            oddArr.push(number);
        }
    }
    console.log(numbers);
    console.log(oddArr);
    console.log('total odd number ->',oddCount);
    console.log("sum of odd number ->" ,oddNumbers)
    console.log('average of odd number ->',oddNumbers/oddCount);
}
oddAverage([4,5,6,1,0,1,5,7,8])

