//1 Explain the difference between Object.keys() , Object.values() ,
// and Object.entries() . Provide examples.

// Object.keys() -> The Object keys methods returns an array of all the keys in the object.
// Object.values() -> The Object values methods returns an array of all the values in the object.
/* Object.entries() -> The Object entries method returns an array of all the key-value pairs in a object, 
                        where each pair is an array [key, value]. */
let fruits = {
  name: "apple",
  food: "fruit",
  macro: "carb",
};
console.log(`Keys from the object: ${Object.keys(fruits)}`);
console.log(`Values from the object: ${Object.values(fruits)}`);
console.log(`Key-Value pairs from the object: ${Object.entries(fruits)}`);

//2 How do for...of and for...in loops differ in JavaScript? Provide
// scenarios where each is preferable

// for-of loops iterate over objects like arrays, strings, maps, and sets.
// They are best used for arrays!
// ex

// for-in loops iterate over properties in a object.
// They are best used for objects!
// ex

//3 How do you use the length property of an array to iterate over it
// dynamically

//

//4 Write a for loop that iterates backward through an array and
// prints its elements to the console.

//5 Which loops in JavaScript are best suited for iterating over objects,
// and why?

//6 Write a function that demonstrates the difference between
// function declarations and function expressions in JavaScript.

//7 Create an object named people where each key is a person's name and
// the value is an array of their favorite foods.
//Use for...in to iterate over the object keys (names).
// Inside that loop, use for...of to print each person’s favorite foods.
