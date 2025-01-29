//1 In order
let foods = ["tacos", "platanos", "rice"];

for (let i = 0; i < foods.length + 1; i++) {
  console.log(`Food in 1st array: ${foods[i]}`);
}

// //2 Reverse order
// let newfoods = ["tacos", "platanos", "rice"];

// for (let i = newfoods.length + 1; i >= 0; i--) {
//   console.log(newfoods[i]);
// }
// inital value = array length - 1 = 4 = "rice"
// condition = logs rice (index of 2), platanos (index of 1), tacos (index of 0)
// decrement = decreassing value of i = index of the array

// //3 make it console log every OTHER food
// let newerfoods = ["tacos", "platanos", "rice"];

// for (let i = 0; i < newerfoods.length - 1; i += 2) {
//   console.log(newerfoods[i]);
// }

//4  if i is equal to rice = console log it
// will be in the code block
let list = ["tacos", "platanos", "rice"];

for (let i = 0; i < list.length; i++) {
  if (list[i] === "rice") {
    console.log(`If Index is equal to rice: ${list[i]}`);
  }
}

//5  Get all values that start with R
let listR = ["tacos", "platanos", "rice", "raisins", "radishes"];

for (let i = 0; i < listR.length; i++) {
  if (listR[i][0] === "r") {
    console.log(`Foods that start with r: ${listR[i]}`);
  }
}
// listR[i][0] = prints the first letter of the array values

// 6 For loop for array of objects ; console name and populations of cities IF the popuilation is over 20
let cities = [
  { name: "New York", population: 18 },
  { name: "Cairo", population: 18 },
  { name: "Mumbai", population: 19 },
  { name: "São Paulo", population: 20 },
  { name: "Mexico City", population: 21 },
  { name: "Shanghai", population: 23 },
  { name: "Delhi", population: 25 },
  { name: "Tokyo", population: 37 },
];

for (i = 0; i < cities.length; i++) {
  if (cities[i].population >= 20) {
    console.log(
      `The city ${cities[i].name} has a population of ${cities[i].population}.`
    );
  }
}

// accessing index of the object = cities[i]
// access the key-value pair of the object = .population
