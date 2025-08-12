const price = 12000 ;

if (price>= 5000){
    // 10%
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log("Your Discount is "+ discount + " Taka");
    console.log("Pay the amount of "+ payAmount + " Taka");
}
else if( price >= 2500){
    // 5%
    const discount = price * 5 / 100;
    const payAmount =  price - discount;

    console.log("Your Discount is "+ discount + " Taka");
    console.log("Pay the amount of " + payAmount + " Taka")
}
