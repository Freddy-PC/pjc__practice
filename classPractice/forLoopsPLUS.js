// for ... of
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// for ... in loop
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

for (let key in car) {
  console.log(key + ": " + car[key]);
}
// key = key value
// car[key] = value

//

/*
Create an object named car with properties: brand, model, year, and color.
Use for...in to print all the keys.
Use Object.keys() with a for loop to print all the keys and their values.
 
*/
let newCar = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "blue",
};

const keys = Object.keys(newCar);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ": " + newCar[keys[i]]);
}
//keys[i] = key -> keys[i] === arrayName[indexOfArray] -> Gives me the value from the array "keys"
//car[keys[i]] = value -> newCar[keys[i]] === newCar[indexName[indexOfArray]]

// for (let key in newCar) {
//   console.log(key);
// }

/*
Create an array of numbers and create a seperate variable that holds a string value
Use for....of to print the indices of the array and the letters of the string
 
*/
let numbers = [1, 2, 3, 4, 5];
let string = "Hello";

for (let index of numbers) {
  console.log(index);
}
for (let letters of string) {
  console.log(letters);
}
/*
Look up these methods:
map()
filter()
forEach()
reduce()
 
Can these methods be used to iterate over these variables?  If so how?
 
Write the syntax for each of these methods
 
 
*/
