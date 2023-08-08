let oddArray = [];
let evenArray = [];

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