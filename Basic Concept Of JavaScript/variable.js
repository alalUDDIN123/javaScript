
//   # Variables:

//     We use programming languages like JavaScript to store and manipulate information.

//     Variables in JavaScript are used to store different kinds of data. Think of a variable
//     like a bottle. We use bottles to store water, in much the same way we use variables to
//     store various forms of data in JavaScript.

// There are basically 3️⃣ types of variable exists

/*  let
    var
    const
 */

// Before going into the deep discussion of JavaScript variables first  see the lifecycle of variables.

 // Reference Image ----> https://i0.wp.com/codezup.com/wp-content/uploads/2020/08/image-19.png?w=695&ssl=1

// Declaration: Declaration means the variable is initialized using the given name within the corresponding scope ( e.g. inside a block or inside a function). We will discuss the scope in the later section.

// Initialization: Initialization simply means when you declare a variable it is automatically initialized, and it means memory is allocated to the variable by the JavaScript engine.

// Assignment: Assignment means a specific value is assigned to the particular variable.

// JavaScript variables are loosely typed. So, what it means?

// So it simply means the variable can hold values with any type of data and variables are just named placeholders for values.


// Global and local variables

// It is important to note that JavaScript mainly has two types of scopes and which are function scoped and global scope.

// If you declare the variable inside the function, then it is function scoped variable and if you declare outside the function then it is globally scoped.

// But ES6 introduced a new scope which is called block scope. We will see the block scope detail in this post when we discuss the let keyword.

// let is block scoped

//  console.log(a)
//  Cannot access 'a' before initialization
let a=10;
console.log(a)


/// var is function scoped

console.log(v) 
//  undefiend
var v =10;
v=20
console.log(v)



// const is also block scoped . We can't reassign same variable

const c=9;
// c=10;   
// TypeError: Assignment to constant variable
// console.log(c)


// Strict and Non-Strict Mode

function sayHello( ) {
    message = "Welcome  JavaScript World !";
    console.log(message);
    } 
    sayHello(); // it prints Welcome in JavaScript World ! message
    console.log(message); //  it prints also Welcome in JavaScript World ! message

    // Why We Can Access Here message variable because it is a Non-Strict Mode

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

