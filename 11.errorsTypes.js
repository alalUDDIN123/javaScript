// when error occurence actuall ❔

// ===> JavaScript errors occur when something goes wrong with the code or prevents execution due to a mistake

// Types of errors

// 1. Syntax error : syntax mistake
// 2. Reference error : variable called outside scope
// 3. Runtime error : unexpected problems during code execution
// 4. Compile Error : Error during compilation
/*


1. **Syntax Error:**
   - **When it occurs:** During the compilation phase.
   - **Example:**
     ```javascript
     let x = 5
     console.log(x;  // Missing closing parenthesis
     ```

2. **Reference Error:**
   - **When it occurs:** During the runtime phase when trying to access an undeclared variable or function.
   - **Example:**
     ```javascript
     console.log(y);  // ReferenceError: y is not defined
     ```

3. **Runtime Error:**
   - **When it occurs:** During the execution of the code due to unexpected problems.
   - **Example:**
     ```javascript
     function divide(a, b) {
       if (b === 0) {
         throw new Error("Cannot divide by zero");
       }
       return a / b;
     }

     divide(10, 0);  // Throws a runtime error
     ```

4. **Compile Error:**
   - **When it occurs:** In languages like JavaScript, which are interpreted and not explicitly compiled, compile errors are rare. However, in languages like Java or C++, this occurs during the compilation phase.
   - **Example:** In languages like JavaScript, there might not be a direct example for a compile error. Instead, syntax errors are caught during the interpretation phase.

*/