let myMark   = 89 ;
let chutiya = 60;

if (myMark > 80) {
    if (chutiya > 80) {
        decision ="Lets go for a lunch "
    } 
    else if (chutiya > 60 && chutiya <= 80) {
        decision ="Good Luck Next time"
    }
    else if (chutiya > 40 && chutiya <= 60) {
        decision ="Try to improve yourself"
    }
    else {
        decision ="Just get lost"
    }


} else {
    decision = "go to sleep"
}

console.log(decision)