//catch this error console.log("Start);
// try{
// console.log("Start);
// console.log("Hello, world!");
// console.log("End");
// } catch(error) {
//     console.log(error)
// }

// Syntaxx error will be returned!!! ////
// Syntax errors will ALWAYS show up as a big error b/c it cannot read what you wrote.

//catch this error
try {
  let myArray = new Array(-5);
} catch (error) {
  console.log("You have an error: " + error.message);
}

// create a finally block
try {
  let a = 10;
  let b = c;
} catch (error) {
  console.log("You have an error: " + error.message);
} finally {
  // let a = 10
  // a = b;
}

// write a function that checks to see
// if a number is positive and use throw to throw and error if it is not
function checkPositive() {
  //throw new RangeError("You entered a invalid number!")
}
