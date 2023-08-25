
// Loop  :  Looping is an essential concept in programming that allows you to execute a block of code repeatedly. 
// In JavaScript, there are several types of loops you can use:

// 1. for loop : The `for` loop is commonly used for executing a block of code a specific number of times.

// 2. while loop : The `while` loop executes a block of code as long as a given condition is true.

// 3. do while loop : Similar to the `while` loop, the `do-while` loop first executes the block of code and then checks the condition.
//  This ensures that the code block is executed at least once.

// 4. for of loop : The `for...in` loop is used to iterate over the properties of an object. 
// It's generally not recommended for iterating over arrays.

// 5. for in loop : The `for...in` loop is used to iterate over the properties of an object.
// It's generally not recommended for iterating over arrays.

//  1. for loop 👍👍👍👍

let limit = 4;
for (let i = 0; i < limit; i++) {
    // console.log(i) // 0 1 3 4
}



//  2. while loop 👍👍👍👍
let c = 0;
while (c < limit) {
    // console.log(c) // 0 1 3 4
    c++;
}


//  3. for of loop 👍👍👍👍


const arr = [1, 2, 3, 4]
for (let i of arr) {
    // console.log(i)// 1 2 3 4
}


// 4. for in loop 👍👍👍👍

const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

for (const key in person) {
    // console.log(`${key}: ${person[key]}`);
}

// 5. do while loop 👍👍👍👍

let num = 0;
do {
    console.log(num); // 0 1 2 3 4 5
    num++;
} while (num < 5);
