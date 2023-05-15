

// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

myNumber = 42;
myName = "Robert";
placeHolder = null;

placeHolder = myName
myName = myNumber
myNumber = placeHolder

console.log(myName, myNumber)

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (let i = -52; i <= 1066; i++) {
    console.log(i)
}

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

let beCheerful = () => {
    console.log("Good Morning!")
}

for (let i = 1; i <= 98; i++) {
    beCheerful();
}

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (let i = 3; i >= -300;  i -= 3) {
    if (i == -3 || i == -6) {
        continue; 
    }
    console.log(i);
}

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

let num = 2000;
while(num <= 5280) {
    console.log(num)
    num ++;
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

let month = 1;
let day = 21;

let birthday =(birthMonth, birthDate) => {
    if(birthMonth == 1 && birthDate == 21){
        console.log("How did you know?")
    }
    else{
        console.log("Just another day.")
    }
}

birthday(1,21);
birthday(4,21);

//does not take into account the order of the date, would need to create variables and pass them in? not sure 

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

let leapYear = (year) => {
    return (year % 100 === 0) ? ( year % 400 === 0) : (year % 4 === 0 )
}

console.log(leapYear(2016));
console.log(leapYear(2000));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));

//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
let multiples = 0

for(let i = 512; i <= 4096; i++) {
    if(i % 5 === 0){
        console.log(i);
        multiples++ 
        console.log(multiples);
    }
}

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

let num2 = 0
while(num2 <= 60000) {
    if(num2 % 6 === 0){
        console.log(num2);
    }
    num2 ++;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(let i = 0; i <= 100; i++) {
    console.log(i)
    if(i % 5 === 0){
        console.log("Coding");
    }
    if(i % 10 === 0){
        console.log("Dojo");
    }
}

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

let printValue = (incoming) => {
    console.log(incoming);
}

printValue("Potatoes!")
printValue("Boil'em!")
printValue("Mash'em!")
printValue("Put Them In a Stew!!!")

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

let huge = () => {
let sum = 0
for(let i = -300000; i <= 300000; i++){
    if(i % 2 !== 0){
        sum += i
        console.log(sum)
    }
}
return sum 
}
console.log(huge())

//answer is 0??

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

