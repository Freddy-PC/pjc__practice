// Ternary
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

console.log(grade); // Output: "B"

// switch statement >
let setColor = "red";

switch (setColor) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("GO!");
    break;
  default:
    console.log("Your input is invalid.");
}

// switch statament >
let setSeason = "June";
switch (setSeason) {
  case "December":
  case "January":
  case "February":
    console.log("Winter is coming.");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring time.");
    break;
  case "June":
  case "July":
  case "August":
    console.log("When I metcha in the Summer.");
    break;
  case "September":
  case "October":
  case "November":
    console.log("Fall time");
    break;
  default:
    console.log("Invalid month name input!");
}

// Terenary program >
// If number has no remaidner return even : if there is a remainder return false
let number = 115;
let evenNumber = number % 2 == 0 ? `${number} is even` : `${number} is odd`;

console.log(evenNumber);

// // function syntax
// function (parameter) {
//     // code that will be executed
// }
// functionName(); // call function (with or wirhout arguements)

// function example
function greetName(name) {
  console.log("Hello " + name + "!");
}
greetName("Martin");
