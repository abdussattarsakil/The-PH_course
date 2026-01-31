const myScore = 81;
const friendScore = 70;

if (myScore > 80) {
    if (friendScore > 80) {
        console.log('go for a launch.');
    }
    else if (friendScore >= 60) {
        console.log('Friend- good luck next time');
    }
    else if (friendScore >= 40) {
        console.log("keep your friend messege unseen");
    }
    else if(friendScore<40){
        console.log('block your friend');
    }
}
else {
    console.log('go home and act sad');
}