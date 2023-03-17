// Conditional Statements :::- Conditional statements are used to decide the flow of execution based on different conditions.



/*
 1. if 
 2. if - else
 3. if-else-if-else
 4. switch statement
*/

let a = 7;
let b = 6;
let c = 10;


// if statement
if (a === b) {
    console.log("A is same as b")
}

// if-else statement

if (a != b) {
    console.log("A is not same as b")
} else {
    console.log("A is same as b")
}


// if-else-if-else statement

if (a == b) {
    console.log("A is  same as b")
} else if (a > b) {
    console.log("A is greater than b")
} else {
    console.log("A is not same as b")
}

// switch statement

let dayOfWeek = 'Monda';

switch (dayOfWeek) {
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    default:
        console.log(`${dayOfWeek}:: is not a valid day `);

}


