var weight = 76 ; //kg
var height = 1.7 ; //metre

var BMI = weight / (height  ** 2);

var result;

if (BMI < 18.5) {
    result = "You are UnderWeight"
} 
else if (BMI >= 18.5 && BMI <=24.9) {
    result = "You are Normal"
} 
else if (BMI >= 25 && BMI <=29.9) {
    result = "You are OverWeight"
} 
else {
     result = "You are obese"
}

console.log(result)