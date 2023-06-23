// git push origin javaScript_Questions_Answer_Preparation
// git checkout javaScript_Questions_Answer_Preparation

// let user_name = "Ravi Ranjan"
// user_name = "Ravi Ranjan Ram"
// console.log("user_name:", user_name); // Ravi Ranjan Ram

// var user_name = "Ravi Ranjan"
// user_name = "Ravi Ranjan Ram"
// console.log("user_name:", user_name); // Ravi Ranjan Ram

// const user_name = "Ravi Ranjan"
// user_name = "Ravi Ranjan Ram"
// console.log("user_name:", user_name); // TypeError

// console.log(5 & 3,"and bitwise operator"); // bitwise operator (AND)

// let stringNum = "40"
// console.log(typeof stringNum); // string

// let NumberNum = parseInt(stringNum)
// console.log(typeof NumberNum); // number

// Object.create()
// var personPrototype = {

// };

// var person1 = Object.create(personPrototype);
// person1.name = "John";
// person1.age = 30;

// console.log("new object using object.create", person1);


// Constructor Function
// function Person(n, a) {
//     this.Person_name = n;
//     this.Person_age = a;
// }

// var person1 = new Person("Ravi", 30);
// console.log(person1);


// Nullish

// const data = undefined

// const getData = (data) => {
//     return data;
// }

// let responseData = getData(data ?? "Default Value")
// console.log(responseData);


// optional chaning

const userData = {
    userAddress: null,
    phone: "76565574"
};

let getUserData = userData?.userAddress;

try {
    if (!getUserData) {
        throw new Error("userAddress is undefined or null");
    }

    console.log(getUserData);
} catch (error) {
    console.error("Error:", error.message);
}


// node script.js