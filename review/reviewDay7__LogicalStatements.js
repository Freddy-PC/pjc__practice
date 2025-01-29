let temperature = 30;

if (temperature >= 20) {
  // Fill in the blank with a comparison operator
  console.log("It's cold outside!");
}

// Fill in the blanks with the correct comparison operator (==, ===, !=, !==, >, <, >=, <=)
console.log(5 == "5"); // Loose equality
console.log(5 === "5"); // Strict equality
console.log(5 > 10); // Greater than
console.log(5 >= 5); // Greater than or equal to

// Fill in the blanks with either a truthy or falsy value
let value1 = 0; // Should evaluate to false
let value2 = 9000; // Should evaluate to true

if (value1) {
  console.log("Value1 is truthy");
} else {
  console.log("Value1 is falsy");
}

if (value2) {
  console.log("Value2 is truthy");
} else {
  console.log("Value2 is falsy");
}

let score = 75;

// Fill in the blanks to complete the control flow
if (score <= 50) {
  console.log("You failed.");
} else if (score <= 75 && score >= 50) {
  console.log("You passed!");
} else {
  console.log("Great job!");
}

/* Write a program that prompts the user for a number
   and alerts whether it falls into one of these ranges: */

// Less than 10
// 10–29
// 30–59
// 60–89
// 90–100
// Greater than 100

// The prompt will appear if you CONNECT the js file to the HTML file //
// 0 is the pre-loaded value in the user-input when the prompt appears
let number = prompt("Enter a number", 0);

if (number < 10) {
  alert("Less than 10");
} else if (number >= 10 && number <= 29) {
  alert("Number is between 10-29");
} else if (number >= 30 && number <= 59) {
  alert("Number is between 30-59");
} else if (number >= 60 && number <= 89) {
  alert("Number is between 60-89");
} else if (number >= 90 && number <= 100) {
  alert("Number is between 90-100");
} else if (number > 100) {
  alert("Number is greater than 100!");
} else {
  alert("Numerical value was not input!");
}
