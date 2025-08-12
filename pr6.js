let ticket = 800;

let age = 65 ;

let result, discount ;

if (age< 10) {
    result = "free"
} else if (age >= 10 && age < 25) {
    discount = ticket / 2;
    ticket = ticket - discount ;
    result = "the price is ";
}
else if (age >= 25 && age < 60) {
    ticket = ticket ;
    result = "the price is ";
}
else{
    discount = ticket * 15 /100 ;
    ticket = ticket - discount ;
    result = "the price is ";
}

console.log(result , ticket);