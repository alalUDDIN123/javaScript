// Operators ::: Operators in JavaScript are used to perform different kinds of operations on values or variables. 
// They are an essential part of the language and allow developers to manipulate and modify data in various ways.

// In the below 5 operators explain with examples
/*
 1. Arithmetic or Mathematical operations
 2. Exponentiation (**) operator
 3. Assignment operators
 4. Comparison operators
 5. Logical operators

*/

// 1. Mathematical Operators

/*
  1. Addition (+): The addition operator is used to add two numbers or concatenate two strings
  2. Subtraction (-): The subtraction operator is used to subtract two numbers.
  3. Multiplication (*): The multiplication operator is used to multiply two numbers.
  4. Division (/): The division operator is used to divide two numbers.
  5. Modulus (%): The modulus operator is used to get the remainder of a division operation.
  6. PostIncrement (++): The increment operator is used to increase the value of a variable by 1.
  7. PostDecrement (--): The decrement operator is used to decrease the value of a variable by 1.

*/

// Examples of each operators


// 1. Addition 👍👍👍👍👍👍👍

/*
let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(result); // Output: 30

let str1 = "Hello";
let str2 = "World";
let greeting = str1 + " " + str2;
console.log(greeting); // Output: Hello World

*/

// 2. Subtraction 👍👍👍👍👍👍👍

/*
let num1 = 20;
let num2 = 10;
let result = num1 - num2;
console.log(result); // Output: 10
*/

// 3. Multiplication 👍👍👍👍👍👍👍

/*
let num1 = 2;
let num2 = 10;
let result = num1 * num2;
console.log(result); // Output: 20
*/

// 4. Division 👍👍👍👍👍👍👍

/*
let num1 = 20;
let num2 = 5;
let result = num1 / num2;
console.log(result); // Output: 4

*/

// 5. Modulus (%) 👍👍👍👍👍👍👍

/*
let num1 = 20;
let num2 = 3;
let result = num1 % num2;
console.log(result); // Output: 2

*/

// 6. PostIncrement (++) 👍👍👍👍👍👍👍

/*
let num1 = 5;
num1++;
console.log(num1); // Output: 6

// post-incremnet
let a = 5;
let b = a++;
console.log(a); // Output: 6
console.log(b); // Output: 5

*/

// 7. PostDecrement (--) 👍👍👍👍👍👍👍

/*
let num1 = 5;
num1--;
console.log(num1); // Output: 4

// post-decremnet
let a = 5;
let b = a--;
console.log(a); // Output: 4
console.log(b); // Output: 5
*/

// 2. Exponentiation (**) operator 👍👍👍👍👍👍👍 :- Exponentiation is a mathematical operation that raises a number to a certain power.
// In JavaScript, the exponentiation operator is represented by two asterisks (**)

// syntax

// base ** exponent

/*
let a=2;
let b=3;
console.log(a**b)

// here a is a base and b is a exponent
*/

// Note : The exponentiation operator has a higher precedence than the multiplication, division,
//and addition operators. However, it has a lower precedence than the parentheses operator,
//which can be used to group expressions and change the order of evaluation

/*
let a = 2
let b = 3
let c = 10

console.log(a ** b * (c + a))
a ** b * (c + a)
= 2 ** 3 * (10 + 2)
= 8 * 12
= 96

*/
// 3. assignment operators (+=, -=, *=, /=, %=) 👍👍👍👍👍👍👍 ::-, Assignment operators in JavaScript are used
//to assign values to variables with an arithmetic operation.
//They combine the assignment operator (=) with another arithmetic operator (+=, -=, *=, /=, %=)
//to perform the arithmetic operation and assign the result to the variable.

/*
1. Addition assignment operator (+=):
2. Subtraction assignment operator (-=)
3. Multiplication assignment operator (*=)
4. Division assignment operator (/=)
5. Modulus assignment operator (%=)

*/
//4.  comparison operators (==, !=, <, >, <=, >=) 👍👍👍👍👍👍👍 ::comparison operators in JavaScript are used 
//to compare two values and return a Boolean value (true or false) based on whether the comparison is true or false

/*
let a = 3;
let b = '3';
let c = 4;
let d = 5;

console.log(a == b);    // Output: true
console.log(a === b);   // Output: false
console.log(c != d);    // Output: true
console.log(c < d);     // Output: true
console.log(d > c);     // Output: true
console.log(a <= b);    // Output: true
console.log(d >= c);    // Output: true

*/


// logical operators (&&,||,!) 👍👍👍👍👍👍👍 :: These are used to perform logical operations on two or more Boolean
 // expressions and return a Boolean value based on the result of the operation. 
 // These logical operators are often used in combination with conditional statements.

/*
 1. AND && : Logical AND (&&) returns true if and only if both operands are true.
 2. OR || : Logical OR (||) returns true if at least one of the operands is true
 3. NOT ! :  It is a unary operator that inverts the value of the operand. 
 If the operand is true, then returns false. If the operand is false,then returns true

 let x = 5;
let y = 10;

// Logical AND (&&)
if (x > 0 && y < 15) {
  console.log('Both conditions are true');
}

// Logical OR (||)
let age = 15;
let height = 120;

if (age >= 18 || height >= 150) {
  console.log('You can ride the roller coaster');
}

// Logical NOT (!)
let rainyDay = true;

if (!rainyDay) {
  console.log('Let\'s go for a walk');
} else {
  console.log('Let\'s stay inside');
}

*/