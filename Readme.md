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

   - `Definition:` Data types in JavaScript are the classifications of data that determine the kind of values a variable can hold.

   - `Benefits:` Each data type has its own set of operations and behaviors which allow developers to manipulate and process data effectively.

   - `Extra information:` There are two main types of data in javaScript:

      1. **`Primitive data types`**: These data types are simple, immutable values directly stored in memory. They can only store a single value at a time and cannot directly store multiple types of data.
           -  number, string, boolean, null, undefined, symbol

      1. **`Reference data types`**: These data types are complex objects stored by reference, allowing mutability. They can store multiple values and different types of data within a single object.
           - object, array, function, date

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
---
---
---
## 2nd day (**`23/6/23`**)



6. **`What are the differences between == and === operators?`**

   - `Definition:` The "==" operator in JavaScript is the loose equality operator, which compares two values for equality, allowing type coercion. The "===" operator is the strict equality operator, which compares two values for equality without performing type coercion.

   - `Use cases:` The "==" operator is often used when you want to perform a loose comparison, where the types of the operands may differ. The "===" operator is used when you want to perform a strict comparison, considering both the values and their types.

   - `Benefits:` The "==" operator can be useful in scenarios where you want to compare values that may be of different types, allowing for automatic type conversion. The "===" operator provides a more precise comparison, ensuring both the values and types are identical.

   - Extra: Example:
     ```javascript
     var num = 5;
     var str = "5";
     
     console.log(num == str);  // true (loose equality, type coercion)
     console.log(num === str); // false (strict equality, different types)
     ```

7. **`How do you convert a string to a number in JavaScript?`**

   - `Definition:` To convert a string to a number in JavaScript, you can use the `parseInt()` or `parseFloat()` functions. These functions parse a string and return a numeric value based on its contents.

   - `Use cases:` String to number conversion is commonly used when dealing with user input or when performing mathematical operations that require numeric values.

   - `Benefits:` Converting a string to a number allows you to perform mathematical operations, comparisons, and other numeric manipulations on the data. It helps ensure the desired behavior when working with numeric values.

   - Extra: Example:
     ```javascript
     var numericString = "42";
     var numericValue = parseInt(numericString);
     
     console.log(numericValue); // 42
     ```

8. **`What are the different ways to include JavaScript in an HTML page?`**

   - `Definition:` There are main two methods to include JavaScript in an HTML page:
     1. `Inline Script:` You can include JavaScript code directly within the HTML file using the `<script>` tag.

     2. `External Script:` JavaScript code can be placed in a separate file and linked to the HTML file using the `<script>` tag's `src` attribute.

   - Extra: Example:
     ```html
     <!-- Inline Script -->
     <script>
       console.log("Hello, world!");
     </script>
     
     <!-- External Script -->
     <script src="script.js"></script>
     ```

9. **`What are the different methods of creating objects in JavaScript?`**

   - `Definition:` In JavaScript, objects can be created using various methods:

     1. `Object Literal:` Creating an object using the object literal notation `{}`.

     2. `Constructor Function:` Defining a custom function and using the `new` keyword to create objects.

     3. `ES6 Classes:` Using the `class` keyword to define a blueprint and creating objects using the `new` keyword.

     4. `Object.create()`: Creating an object by specifying a prototype object.

   - `Use cases:` Objects are fundamental in JavaScript and are used to represent complex data structures, encapsulate related data and behavior, and build object-oriented systems.

   - `Benefits:` Different object creation methods provide flexibility, code organization, and support for object-oriented principles like inheritance and encapsulation.

   - Extra: Example:
     ```javascript
     // Object Literal
     var person = {
       name: "John",
       age: 30,
       greet: function() {
         console.log("Hello!");
       }
     };
     
     // Constructor Function
      function Person(n, a) {
         this.Person_name = n;
         this.Person_age = a;
      }

      var person1 = new Person("Ravi", 30);
   
     
     // ES6 Class
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
     }
     
     var person1 = new Person("John", 30);
     
     // Object.create()
     var personPrototype = {};
     
     var person1 = Object.create(personPrototype);
     person1.name = "John";
     person1.age = 30;
     ```
     
   The `Object.create()` method allows you to create an object by specifying a prototype object. In the example above, `personPrototype` serves as the prototype object, which contains shared properties and methods. By calling `Object.create(personPrototype)`, you create a new object `person1` that inherits the properties and methods defined in `personPrototype`. You can then add additional properties specific to `person1` as needed.
     ```

10. **`What is the Nullish coalescing operator (??) and Optional chaining (?.) in JavaScript?`**

    - `Definition:` The Nullish coalescing operator (`??`) provides a concise way to determine a default value when a variable is `null` or `undefined`. Optional chaining (`?.`) allows you to safely access nested properties or call functions even if an intermediate property is `null` or `undefined`.

    - `Use cases:` Nullish coalescing is useful when you want to assign a default value to a variable that may be `null` or `undefined`. Optional chaining is handy when working with objects that have nested properties or when calling functions that may not exist.

    - `Benefits:` The Nullish coalescing operator avoids unintended fallbacks on falsy values like `0` or an empty string (`""`), ensuring you explicitly handle `null` or `undefined`. Optional chaining simplifies code and reduces the need for explicit null/undefined checks, making it safer to access nested properties or call functions.
    
    - Extra: Example:
      ```javascript
      // Nullish Coalescing Operator
      var foo = null;
      var bar = foo ?? "default value";
      
      console.log(bar); // "default value"
      
      // Optional Chaining
      var obj = {
        foo: {
          bar: "Hello, world!"
        }
      };
      
      var value = obj?.foo?.bar;
      
      console.log(value); // "Hello, world!"
      ```