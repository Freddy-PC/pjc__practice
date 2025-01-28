// // Ternary
// const score = 85;
// const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// console.log(grade); // Output: "B"

// // switch statement >
// let setColor = "red";

// switch (setColor) {
//   case "red":
//     console.log("Stop!");
//     break;
//   case "yellow":
//     console.log("Caution");
//     break;
//   case "green":
//     console.log("GO!");
//     break;
//   default:
//     console.log("Your input is invalid.");
// }

// // switch statament >
// let setSeason = "June";
// switch (setSeason) {
//   case "December":
//   case "January":
//   case "February":
//     console.log("Winter is coming.");
//     break;
//   case "March":
//   case "April":
//   case "May":
//     console.log("Spring time.");
//     break;
//   case "June":
//   case "July":
//   case "August":
//     console.log("When I metcha in the Summer.");
//     break;
//   case "September":
//   case "October":
//   case "November":
//     console.log("Fall time");
//     break;
//   default:
//     console.log("Invalid month name input!");
// }

// // Terenary program >
// // If number has no remaidner return even : if there is a remainder return false
// let number = 115;
// let evenNumber = number % 2 == 0 ? `${number} is even` : `${number} is odd`;

// console.log(evenNumber);

// // // function syntax
// // function (parameter) {
// //     // code that will be executed
// // }
// // functionName(); // call function (with or wirhout arguements)

// // function example
// function greetName(name) {
//   console.log("Hello " + name + "!");
// }
// greetName("Martin");

// let strNum = "123";
// let num = Number(strNum);
// console.log(typeof num);

// let isOver = false;
// let counter = 1;

// // run the while loop if isOver is NOT TRUE
// // isOver may not be available in THIS file so the readability is better
// while (isOver != true) {
//   // The confirm method will ask the user for an input (requres a yes or no)
//   let continueLoop = confirm(`[${counter++}] Continue the loop?`);
//   // isOver becomes treu if the user inputs false/no
//   // if continueLoop is equal to true ? then isOver is equal to false
//   isOver = continueLoop === true ? false : true;
//   // everytime the user chooses to continue...increment by 1
//   counter += 1; // or counter = counter + 1
// }
