// Solution to the startup task

let oddArray = [];
let evenArray = [];

// The for loop to loop through the IDs
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        oddArray.push(i)
    } else {
        evenArray.push(i)
    }
}

console.log(oddArray.length);
console.log(evenArray.length);

console.log(oddArray);
console.log(evenArray);
