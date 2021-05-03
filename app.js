

// confirm("Do you like animals?");
// prompt("What kind of animals do you like?");


// function myFunc() {
//     // block of code
//     console.log("this is how we declare a function");

//     myFunc();

//     function myfunc2(hobby,name) {
//         console.log(`Hi` + hobby + name);
//     }
//     myfunc2("swim", "Sky");

//     function subtractNum(num1, num2){
//     var sub= num1-num2
//     console.log (sub);
//     }
//     subtractNum(25,10);
//     subtractNum(2200,1855);

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


// function tellFortune (children, partner, place, career){
// var future= (`You wiill be a ${career} in ${place} and married to ${partner}  with ${children}`)
// console.log(future);
// }
// tellFortune(9,"B","LA","BB");
// tellFortune(0, "Guy", "CO", "job");
// tellFortune(3,"G", "Mex","rich");


// function calculateSupply (age, amount) {
//     var maxAge = 80;
//     var total = (amount * 365) * (maxAge - age);
//     var message = (`You will need ${total} to last you until the age of ${maxAge}`);
//     console.log(message);
// }

// calculateSupply(38, 2);
// calculateSupply(20, 3);
// calculateSupply(25, 5);

// function dogAge (age) {
//     var year= (7 * age);
//     console.log(`Your dog will be ${dogAge} by next year`);

// }
// dogAge(2);
// dogAge(4);

// this gets the time
var currentTime= new Date();

var time= document.getElementById("cTime");
time.innerHTML= currentTime.toLocaleTimeString();

// this is the date

var date= document.getElementById("cDate");
date.innerHTML= currentTime.toLocaleDateString();

// day of week
var weekDays= new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
var dow= document.getElementById("dayofWeek");
dow.innerHTML= weekDays[currentTime.getDay()];
