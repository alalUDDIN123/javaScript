// Variable Hoisting in JavaScript
// JavaScript engine goes through the two phases when we execute the JavaScript code. Below are that two phases:

// Parsing
// Execution
// Now let’s see what happen in both the phase.

// In the parsing phase, all the declared variables moved to the top of the JavaScript file if the variables are global or to the top of function if the variables are declared inside the function. All this work is done by the JavaScript Engine.

// The next phase is Execution. In the execution phase JavaScript engine assigns the value to the variables and executes the code.

// Hoisting
// Hoisting is the mechanism in which the JavaScript engine moves all the variables to the top of their scope. If it is function scoped, then it moves variables to the top of the function. And if it is globally scoped then it moves variables to the top of the JavaScript file.

// For Example:

// If we declare the variable using the var keyword, then the variable is hoisted at the top of their enclosing scope. And if we try to access a variable before declaring it then it evaluates to undefined.

// Below is the coding snippet which helps you to understand this :

console.log(helloMessage); // it gives undefined
var helloMessage;
// While we discuss the Hoisting mechanism scenario in the earlier part then we saw that JavaScript engine moves all the variable to their enclosing scope. So above code snippet will be equal to the below code snippet:

var helloMessage;
console.log(helloMessage); // it gives undefined
// What happen if there is no Hosting?

// If there is no hosting, then we will get ReferenceError because you referenced to a variable that was not defined and you try to access that.

// Below is the example:

console.log(hundred);
var hundred=100;
// We know that the JavaScript engine moves all the variables to the top of their enclosing scope but it keeps the initial assignment of the variable intact. So we can say that value not assigned in this process. So above code is same as the below code snippet:

var hundred;
console.log(hundred); // it gives undefined
hundred=100
