// Solution to the FizzBuzz

let Fizz = [];
let Buzz = [];
let FizzBuzz = [];
let Other = [];

// A loop to go through the numbers
for (let i = 1; i <= 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz.push(i)
    } else if (i % 3 === 0 ) {
        Fizz.push(i)
    } else if (i % 5 === 0 ) {
        Buzz.push(i)
    } else {
        Other.push(i)
    }    
}

console.log("Total Number of Fizz = " + Fizz.length);
console.log("Total Number of Buzz = " + Buzz.length);
console.log("Total Number of FizzBuzz = " + FizzBuzz.length);
console.log("Total Number of Other = " + Other.length);

console.log("Divisible by 3: " + Fizz);
console.log("Divisible by 5: " + Buzz);
console.log("Divisible by 3 and 5: " + FizzBuzz);
console.log("Not divisible by either 3 or 5: " + Other);

document.write("Hello World")
