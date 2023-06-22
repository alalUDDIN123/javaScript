## 1st Day (**`22/6/23`**)

1. **`What is JavaScript? How does it differ from Java?`**

   - `Definition:` JavaScript is a high-level programming language primarily used for web development. It enables interactive and dynamic behavior on web pages.

   - `Use case:` JavaScript is used to enhance user experience on websites by adding interactivity and dynamic content.

   - `Benefits:` It helps for client-side scripting, reducing server load and improving responsiveness. It has a large ecosystem of libraries and frameworks.

   - `Extra information:` JavaScript is different from Java in terms of syntax, purpose, and execution environment. Java is a statically typed language used for a wide range of applications.

Example code:
```javascript
// JavaScript code
function greet() {
  console.log("Hello, JavaScript!");
}
greet();
```

2. **`What are the data types in JavaScript?`**

   - `Definition:` Data types are basically diffrent kinds of data that can be stored in variables.

   - `Use case:` Data types are used to represent different kinds of values in JavaScript programs.

   - `Benefits:` Each data type has its own set of operations and behaviors which allow developers to manipulate and process data effectively.

   - `Extra information:` There are two main types of data in javaScript:

      1. **`Primitive data types`**: number, string, boolean, null, undefined, symbol
      1. **`Reference data types`**: object, array, function, date

Example code:
```javascript
// JavaScript code
let message = "Hello"; // string
let count = 10; // number
let isTrue = true; // boolean
let person = null; // null
let data; // undefined
let symbol = Symbol("key"); // symbol
let student = { name: "John", age: 20 }; // object
var arr = [1, 2, "bablu", 4, 5]
```

3. **`What are the different ways to declare variables in JavaScript?`**

   - `Definition:` Variables are used to store the data.

   - Extra information: There are three ways to declare variables in JavaScript : `var,let,const`.

Example code:
```javascript
// JavaScript code
var x = 5; // var declaration
let y = 10; // let declaration
const PI = 3.14; // const declaration
```

4. **`What is the difference between var, let, and const?`**

   - `Definition:` var, let, and const are variable declaration keywords in JavaScript.

   - `Use case:` They determine how variables are scoped and whether their values can be changed.

   - `Benefits:` Understanding the differences helps developers write more reliable and maintainable code.

   - `Extra information:` `var is function or globally scoped`, `let is block-scoped with reassignment`, and `const is block-scoped with immutability`. var gets hoisted, while let and const do not.

Example code:
```javascript
// JavaScript code
var x = 5; // var can be reassigned and redeclared
let y = 10; // let can be reassigned but not redeclared
const PI = 3.14; // const cannot be reassigned or redeclared

function example() {
  var x = 20; // var within function scope
  let y = 30; // let within function scope
  const Z = 40; // const within function scope
  console.log(x, y, Z);
}

example();
```

5. **`What are the different types of operators in JavaScript?`**

   - `Definition:` Operators in JavaScript are used to perform different kinds of operations on values or variables.

   - `Use case:` Operators are used to manipulate and compare values, perform mathematical operations.

   - Extra information: Diffrent types of operatores in javaScript are : 

      1. `Arithmetic or Mathematical operations`

      2. `Exponentiation (**) operator`

      3. `Assignment operators`

      4. `Comparison operators`

      5. `Logical operators`

Example code:
```javascript
// JavaScript code
let a = 5;
let b = 2;

console.log(a + b); // addition operator
console.log(a - b); // subtraction operator
console.log(a * b); // multiplication operator
console.log(a / b); // division operator
console.log(a % b); // modulo (remainder) operator

let x = 10;
x += 5; // compound assignment operator
console.log(x);

console.log(a > b); // comparison operator (greater than)
console.log(a === b); // comparison operator (strict equality)

console.log(!true); // logical operator (NOT)
console.log(true && false); // logical operator (AND)
console.log(true || false); // logical operator (OR)

console.log(5 & 1); // bitwise operator (AND)
console.log(5 | 1); // bitwise operator (OR)

let result = (a > b) ? "a is greater" : "b is greater"; // conditional (ternary) operator
console.log(result);

console.log(typeof a); // typeof operator
```