
// function : A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// two things need to create excute a function 👍👍👍

// 1 declaration
// 2 calling

// declaration
// function declaration(){
//     console.log("I am a function");
// };

// // calling
// declaration()

//function with parameters 👍👍👍👍

// function withParameters(a,b){
//     // here a and b are called parameters
//     console.log("a ::-",a, "b::-",b);

//     return a+b
// }

// withParameters(2,3)
// // here 2 and 3 are called arguments
// console.log(withParameters(4,5)*5)


// function with return statement 👍👍👍👍

// In summary, we use the return statement in JavaScript functions to specify the value
// that should be returned when the function is called.
//  This allows us to pass values back to the code that called the function,
//  which is useful for further calculations or display purposes


function returnStatement(width,height)
{
    return width*height
}

let returnResult= returnStatement(2,3)

// now for our convinence we can use this returnResult with other code as well
// let's say I want to add 10 with this, so...

let add=10;
console.log('\n',"Before adding 10 with returnResult::-", returnResult,'\n');
console.log('\n',"After adding 10 with returnResult::-", returnResult+add,'\n');
