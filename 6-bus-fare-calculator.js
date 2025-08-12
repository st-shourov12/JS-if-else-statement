/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let fare = 800 ;

let age = 5;

let isStudent = true; 

let discount, price;

if (age < 10) {
    console.log("Children's are invited at anytime .");
} else if (age < 27 && isStudent) {

    discount = fare * 50 / 100 ;
    price = fare - discount;
    console.log("As you are the future of the country , pay just ",price , " with 50% discount . Be kind and Gentle .");

}
else if (age >= 60) {
    discount = fare * 15 / 100;
    price = fare - discount ;
    console.log("As you are the gurdian of the country, pay just ", price, " with 15% discount . Pray for us .");
}
else(
    console.log("Please pay ",price)
)
