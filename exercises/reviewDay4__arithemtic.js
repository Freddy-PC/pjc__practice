//what is the difference between primitives and non-primitive data types in JavaScript?
/* Primitive data types are immutable. 
   Non-primitive data types are muteable. */
// Non-primitives like functions, arrays and objects store data

//Name the primitive data types in JavaScript, assign them a variable
let string = "12";
let number = 12345;
// or a floating number
let bigInt = 12345n;
let boolean = false;
let symbol = Symbol("Unique Symbol");
let absentOnPurpose = null;
let absent = undefined;

//What is the difference between an array and an object?
/// An object holds data in key value pairs. Arrays holds data in a list

//When would you use an object instead of an array?
/* You would use an object if you want to organzie a large amount of data in a organzied manner.
        And if you want easy access to that Data from its key. */
// Use an Array to store data that doesn't require organization.

//What is the difference between the / and % operators? Provide examples.
/// The division operator can divide number values.
/// The modulus operator divides values and returns the remainder

//What will this code output, and why?
// console.log(5 + "5");
// 55

//What is the difference between var, let, and const?
/* Var is an outdated version to create a varibale. 
   It can both globally and locally define a variable depending were it is created. */
/// Let creates a variable that can be changed.
/// Const creates a variable that cannot be changed.

//How would you find documentation for a JavaScript method or library?
// MDN //
// Web docs
// W3Schools
/// Stack Overflow ///

//Write a scenario where you would use a string in your code.
/// If users need to type anything in a chat box

//How would you check the type of a variable in JavaScript?
/// The typeOf operator

//When wouild you use a Object
/// Change, edit, or delete data > Put it into an object!

let x = 5;
console.log(++x);
console.log(x++);

console.log(x);
console.log(++x);
console.log(x++);
