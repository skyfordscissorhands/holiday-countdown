

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
var dayofWeek= document.getElementById("dayofWeek");
dayofWeek.innerHTML= weekDays[currentTime.getDay()];
// execute functin to run display clock




runClock();
setInterval("runClock()",1000);

// function to create and run the countdown
function runClock() {
    // current time and date
    var currentDay= new Date();
    var dateStr= currentDay.toLocaleDateString();
    var timeStr= currentDay.toLocaleTimeString();

    // dispaly current date and time
    document.getElementById("cTime").innerHTML=
    dateStr + "   " + timeStr;
// set timer date 
// var today= new Date();  
// var eventDate= new Date("July 15,2021 00:00::");
// GET CURRENT TIME
// var currentTime= today.getTime();
// var eventTIme= eventDate.getDate.getTime);
// var remTime= evenTime = currentTime; 
// var seconds=Math.floor(remTime/1000);
// var min
// hours = hours/24;
// minutes = /60
// seonds= /60

// ? (if) ;(else)
// 
    // calculate days until July 15
    var newDay = new Date("July 15, 2021 00:00:00");
    var nextDay = currentDay.getFullYear("cTime");
    newDay.setFullYear(nextDay);
    var daysLeft = (newDay- currentDay)/(1000*60*60*24);
    
    // calculate hoursleft
    var hoursleft = (daysLeft - Math.floor(daysLeft))*24;

    // calcuate minutes and secs
    var minLeft = (hoursleft - Math.floor(hoursleft))*60;
    var secsLeft = (minLeft - Math.floor(minLeft))*60;

    // dispay time left until new years
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hours").textContent = Math.floor(hoursleft);
    document.getElementById("minutes").textContent = Math.floor(minLeft);
    document.getElementById("seconds").textContent = Math.floor(secsLeft);

    setTimeout(countDown,1000);
}
countDown();