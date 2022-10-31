/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

// Undefiend 

let und; // decleare variable but value not assigned

console.log(und) /// Output :=  undefined,  typeof = undefined


// Null

let nu=null; // assigned null value

console.log(nu) /// Output :=  null,  typeof= object because of legacy reasons


// Number

let num=1;

console.log(num) /// Output := 1,  typeof= number

// String

let str='11' /// Any value that is inside single or double  quotes will be string

console.log(str) /// Output := 11,  typeof= string

// boolean


let blo=true;

console.log(blo) /// Output := true,  typeof= boolean


// array


var arr = [1, 2, "bablu", 4, 5]
console.log(arr)// Output :=  [1, 2, "bablu", 4, 5], typeof= object This because in javascript all derived data type is always a type object

// object

var data = {
    age: 34,
    name: "Alal",
    
}
console.log(data);