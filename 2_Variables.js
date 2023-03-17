
//   # Variables:

//     We use programming languages like JavaScript to store and manipulate information.

//     Variables in JavaScript are used to store different kinds of data. Think of a variable
//     like a bottle. We use bottles to store water, in much the same way we use variables to
//     store various forms of data in JavaScript.

//     Example:
//     var number = 200

//     Syntax: You can also declare multiple variables in one statement as seen in the syntax
//     below.

//     Multiple Variables Example:
//     var a = 100, b = 200, c = 300;

//     The data inside variables is not constant. This means the data inside a variable can
//     be changed.

//     Example:
//     var a = 200
//     a = 100

//     In the above example the variable called a first contained the value 200 but a = 100
//     means that a now contains the value 100.

//     NOTE: You can name variables whatever you want but try to give them good/descriptive
//     names that tell the reader what the variable is used for

// Let VS Var 👍 👍
// 1. Scope . Variables declared with the "var" keyword are function scope
//  which means they are accessible within the entire function in which they are declared, as well as any nested functions.
//  On the other hand, variables declared with the "let" keyword are block scoped, 
// which means they are only accessible within the block in which they are declared.

for (let i = 0; i < 9; i++) {

}

console.log(i, "iii"); // here i will print as undefined because i is defined with let keyword
// which is block scope , so we can not access block scope from out the block



// In the first example, the variable "i" is declared using the "let" 
// keyword and is only accessible within the for loop block.
//  Once the for loop has finished executing, the variable "i" 
//  is no longer in scope and cannot be accessed.

for (var i = 0; i <= 9; i++) {

}

console.log(i, "iii"); // here i will print 10 because of i is declared with var variable

// In the second example, the variable "i" is declared using the "var" keyword,
// which makes it accessible throughout the entire function.
//  The for loop has finished executing and value of "i" is 10, that's why it is printing 10.

// 2. Hoisting: Variables declared with var are hoisted to the top of their scope,
// meaning that they are accessible before they are declared.
// Variables declared with let, are not hoisted and cannot be accessed before they are declared.

/*

console.log(x); // undefined
  var x=5;
console.log(x); // 5


console.log(x); // ReferenceError: x is not defined
  let x=5;
console.log(x); // 5

*/

// 3. Re-assignment: Both let and var allow you to reassign the value of a variable.
// However, when you declare a variable with let,
// you can only declare it once within the same block,
// while var allows you to declare the same variable multiple times within the same scope

/*

var x = 1;
var x = 2;
console.log(x); // 2

let y = 1;
let y = 2; // SyntaxError: Identifier 'y' has already been declared
console.log(y);

*/