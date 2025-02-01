// ////1 Explain the difference between Object.keys() , Object.values() ,
// // and Object.entries() . Provide examples.

// // Object.keys() -> The Object keys methods returns an array of all the keys in the object.
// // Object.values() -> The Object values methods returns an array of all the values in the object.
// /* Object.entries() -> The Object entries method returns an array of all the key-value pairs in a object,
//                         where each pair is an array [key, value]. */
// let fruits = {
//   name: "apple",
//   food: "fruit",
//   macro: "carb",
// };
// console.log(`Keys from the object: ${Object.keys(fruits)}`);
// console.log(`Values from the object: ${Object.values(fruits)}`);
// console.log(`Key-Value pairs from the object: ${Object.entries(fruits)}`);

// ////2 How do for...of and for...in loops differ in JavaScript? Provide
// // scenarios where each is preferable

// // for-of loops iterate over objects like arrays, strings, maps, and sets.
// // They are best used for arrays!

// // for-in loops iterate over properties in a object.
// // They are best used for objects!

// //3 How do you use the length property of an array to iterate over it//////////////////
// // dynamically? (In for loops)

// // You can refer i (in a for loop) equal to the array length.
// //  (i < Array.length) -> every array element

// ////4 Write a for loop that iterates backward through an array and
// // prints its elements to the console.

// let array = [2, 4, 6, 8, 10];
// for (i = array.length - 1; i >= 0; i--) {
//   // console.log(i); // returns a number value of array.length = 5
//   console.log(array[i]);
//   // array.length === 5
//   // The arrays last index is ACTUALLY 4
//   // array.length - 1 === 4
// }

// // the start point is the array.length = 5 (total array values)
// // if i is greater than or equal to 1 -> go to the for loop body
// // i-- -> decrement (going backwards from the array value "5")

// ////5 Which loops in JavaScript are best suited for iterating over objects,
// // and why?

// // The for-in loop because it iterates over properties in a object.

// ////6 Write a function that demonstrates the difference between
// // function declarations and function expressions in JavaScript.

// // Function declarations define a function using the function keyword at the beginning of the statement.
// // They are hoisted ===
// // We use return so the function gives back a value that can be used.
// // Functions do not automatically return values unless you tell them...
// function subtration(a, b) {
//   return a - b;
// }
// console.log(subtration(5, 1));

// // Funtion expressions defines a function within an expression.
// const addition = function (a, b) {
//   return a + b;
// };
// console.log(addition(5, 1));

// //7 Create an object named people where each key is a person's name and
// // the value is an array of their favorite foods.
// //Use for...in to iterate over the object keys (names).
// // Inside that loop, use for...of to print each person’s favorite foods.

// // let people = {
// //   bob: ["hamburger", "fries"],
// //   maria: ["enchiladas", "tacos"],
// //   frank: ["spagetti", "fettechini"],
// //   liz: ["ramen", "sushi"],
// // };

// // // Nested loop..........
// // for (let key in people) {
// //   // people === keys > bob
// //   console.log("\n" + key); //
// //   for (let munch of people[key]) {
// //     // people[eat] === values > hamburger, fries
// //     console.log(munch);
// //   }
// // }

// // Example from above
// try {
//   for (let key in people) {
//     console.log("\n" + key); //
//     for (let munch of people[key]) {
//       console.log(munch);
//     }
//   }
// } catch (error) {
//   console.log("You have an error: " + error);
// }
