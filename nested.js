const money = 100;

if (money >= 300 ){
    if (money >= 500){
        console.log('Lets go to watch a movie and eat Popcorn')
    }
    else if (money >= 400){
        console.log('Lets go to watch a movie and eat Chips')
    }
    else{
        console.log('Lets go to watch movie')
    }
}
else if (money >= 200){
    console.log('Lets go to eat fuchka')
}
else if (money >=100){
    
    console.log('Bhai chol jhalmuri khai')
}
else {
    if(money < 100 && money > 50){
        console.log('Bhai chol puri , singara khai')
    }
    
    else if (money > 0 ){
        console.log('Bhai chol dal vaja khai ')
    }
    
    else{
        console.log('Bhai tui Vikkkha kor')
    }
}