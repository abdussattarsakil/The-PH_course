function gonoVote(array) {
    if(Array.isArray(array)!==true){
        return "Invalid";
    }
    let countHaVote =0;
    let countNaVote=0;
    for(let vote of array){
        if(vote==="ha"){
            countHaVote++;
        }
        else{
        countNaVote++;
        }
    }
    if(countHaVote>countNaVote){
        return true;
    }
    else if (countHaVote<countNaVote){
        return false;
    }
    else{
        return "equal"
    }

}