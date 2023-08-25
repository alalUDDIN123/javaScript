// arrays : Arrays are a fundamental data structure in JavaScript used to store collections of values

// ways to create a array
        // Array Literal Syntax: const fruits = ["apple", "banana", "orange"];
        // Array Constructor: const numbers = new Array(1, 2, 3, 4, 5);
        // Using Array.from():=const newArray = Array.from("hello");
        // Using Array.of():=const newArray = Array.of(1, 2, 3);
        // Using Fill Method:const newArray = new Array(5).fill(0);
        // Creates an array with 5 zeros: [0, 0, 0, 0, 0]
        //Creating Arrays with a Specified Length:const newArray = new Array(3); 
        // Creates an array with 3 undefined elements
        // newArray[0] = "first";
        // newArray[1] = "second";
        // newArray[2] = "third";
 

    //     1. **push() and pop():**
        
    //     ```javascript
    //     const fruits = ["apple", "banana"];
    //     fruits.push("orange"); // Adds "orange" to the end
    //     console.log(fruits);   // Output: ["apple", "banana", "orange"]
        
    //     fruits.pop();          // Removes the last element ("orange")
    //     console.log(fruits);   // Output: ["apple", "banana"]
    //     ```
        
    //     2. **unshift() and shift():**
        
    //     ```javascript
    //     const numbers = [2, 3, 4];
    //     numbers.unshift(1);   // Adds 1 to the beginning
    //     console.log(numbers); // Output: [1, 2, 3, 4]
        
    //     numbers.shift();      // Removes the first element (1)
    //     console.log(numbers); // Output: [2, 3, 4]
    //     ```
        
    //     3. **concat():**
        
    //     ```javascript
    //     const arr1 = [1, 2, 3];
    //     const arr2 = [4, 5, 6];
    //     const combined = arr1.concat(arr2);
    //     console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
    //     ```
        
    //     4. **slice():**
        
    //     ```javascript
    //     const original = [1, 2, 3, 4, 5];
    //     const sliced = original.slice(1, 4); // Creates a new array with elements from index 1 to 3
    //     console.log(sliced); // Output: [2, 3, 4]
    //     ```
        
    //     5. **map():**
        
    //     ```javascript
    //     const numbers = [1, 2, 3];
    //     const squared = numbers.map(num => num * num);
    //     console.log(squared); // Output: [1, 4, 9]
    //     ```
        
    //     6. **filter():**
        
    //     ```javascript
    //     const numbers = [1, 2, 3, 4, 5];
    //     const even = numbers.filter(num => num % 2 === 0);
    //     console.log(even); // Output: [2, 4]
    //     ```
        
    //     7. **reduce():**
        
    //     ```javascript
    //     const numbers = [1, 2, 3, 4, 5];
    //     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //     console.log(sum); // Output: 15
    //     ```
        
    //     8. **indexOf():**
        
    //     ```javascript
    //     const fruits = ["apple", "banana", "orange"];
    //     const index = fruits.indexOf("banana");
    //     console.log(index); // Output: 1
    //     ```
        
    //     9. **isArray():**
        
    //     ```javascript
    //     const array1 = [1, 2, 3];
    //     const array2 = "not an array";
    //     console.log(Array.isArray(array1)); // Output: true
    //     console.log(Array.isArray(array2)); // Output: false
    //     ```
        
    //     Certainly! Here are examples of how to use the `sort()`, `reverse()`, `some()`, and `every()` array methods in JavaScript:

    //     10. **sort():**
    //     The `sort()` method is used to sort the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.
        
    //     ```javascript
    //     const fruits = ["banana", "apple", "orange", "grape"];
    //     fruits.sort();
    //     console.log(fruits); // Output: ["apple", "banana", "grape", "orange"]
        
    //     const numbers = [4, 2, 8, 5, 1];
    //     numbers.sort((a, b) => a - b); // Sorting numbers in ascending order
    //     console.log(numbers); // Output: [1, 2, 4, 5, 8]
    //     ```
        
    //     11. **reverse():**
    //     The `reverse()` method reverses the order of the elements in an array in place.
        
    //     ```javascript
    //     const numbers = [1, 2, 3, 4, 5];
    //     numbers.reverse();
    //     console.log(numbers); // Output: [5, 4, 3, 2, 1]
    //     ```
        
    //     12. **some():**
    //     The `some()` method tests whether at least one element in the array passes the test implemented by the provided function.
        
    //     ```javascript
    //     const numbers = [1, 2, 3, 4, 5];
    //     const hasEven = numbers.some(num => num % 2 === 0);
    //     console.log(hasEven); // Output: true (because 2 and 4 are even)
    //     ```
        
    //   13. **every():**
    //     The `every()` method tests whether all elements in the array pass the test implemented by the provided function.
        
    //     ```javascript
    //     const numbers = [2, 4, 6, 8, 10];
    //     const allEven = numbers.every(num => num % 2 === 0);
    //     console.log(allEven); // Output: true (because all elements are even)
    //     ```
        
