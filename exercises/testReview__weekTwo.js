// Numbered questions (#) I answered in the first 30-min

//1 How do you efficiently access the last element of an array without knowing its length?
/* First I figured out how to access the index of the last value in the array.
   Then I call the array and use bracket notation to get the value of that index.*/
let array = [3, 5, 7, 9];
console.log(array[array.length - 1]);

//2 What does accessing a non-existent property of an object return?
/* If you access a non-exisiting property from an object, the object will return undefined. */
let object = {};
console.log(object.name);

//3 How does the map() function transform arrays in JavaScript?
/* The map method iterates over every array value and creates a new array from the original array. 
   The original array is not changed. */
// let mapArray = [10, 20, 30, 40];

//4 What is the purpose of the reduce() method in JavaScript arrays,
// and how does it differ from map()?
/* The reduce() method is a high-order iterative function used to
   process and reduce an array to a single value.*/
/* The reduce() method adds all the array values into a single value */
/* The map() method creates a new array with the same number of elements from the origincal array. /

//5 What are arrow functions, and how do they differ from regular function expressions?
/* Arrow functions are a short-hand synatx for writing functions. */
/* Function expressions have a function stored as a variable. */
// Let arrowFunction = (a,b) => a + b;
// let functionExpression = function (a,b) {
// retrurn a + b;
// }

//////////// Regular functions and Fucntion expressions are NOT hoisted. ////////////////////////

// What is the difference between type coercion and type conversion in JavaScript?
// Provide examples of each.
/* Coersion is implicit; it happens in the background*/
console.log(1 + "2"); // String Coersion
/* Conversion is explicit; you have to attach logic.*/
console.log(1 * "2"); // The JS engine changes the data type

// Write code that does a simple increment and decrement to a number,
// and how would you do it so it increments/devcrements immediately?
let x = 10;
console.log(x++); // won't see the result yet
console.log(x);
console.log(++x); // immediate

//8 Write some JavaScript code that uses higher-order functions like filter() , map() , and reduce().
let mapArray = [10, 20, 30, 40, 50];
let newArray = mapArray.map((num) => num * 2);
console.log(newArray);
/* Challenge: Try to make a callback function that can be more resuable than the code above... */

// How does JavaScript handle recursion when calculating factorials? Write an example program
function factorial(n) {
  if (n === 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
consolke.log(factorial(5));
// a> Function invocation
// b> Skips the if statement
// c> returns ...
// d> n-value goes through the
