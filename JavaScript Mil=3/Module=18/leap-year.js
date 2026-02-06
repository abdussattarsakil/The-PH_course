function leapYear (year){
    if(year%100!==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}

const year =1900;
let leapYearCheck = leapYear(year);
console.log(year,'year is leap year ->',leapYearCheck)