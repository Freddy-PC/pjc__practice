// Instructions:
// 1. Initialize a variable `count` to 10.
let count = 10;
// 2. Use a `while` loop to print the countdown numbers.
// 3. After the loop ends, print "Blast off!"
while (count > 0) {
  console.log(`Countdown: ${count}...`);
  count--;
}
console.log(`Blast off!`);

// Instructions:
// 1. Generate a random number using `Math.random()` and store it in a variable.
// 2. Use a `while` loop to keep asking the user to guess the number.
// 3. If the guess is correct, exit the loop and print "Correct!".
// 4. If not, prompt the user to guess again.

// Math.Random sets the range
// Math.Floor rounds to the nearest integer

let randomNum = Math.floor(Math.random() * 10) + 1; // Set number range from 1 -10
let userGuess = 0;

while (userGuess !== randomNum) {
  console.log(randomNum); // se the random number in the console log
  userGuess = prompt(`Guess a number from 1 through 10.`, 0);
  if (userGuess === randomNum) {
    alert("Correct!");
  } else if (userGuess > randomNum || userGuess < randomNum) {
    alert("Incorrect guess. Try again...");
  }
}

// Instructions:
// 1. Define a variable `correctPassword` with a value like "javascript123".
// 2. Use a `do...while` loop to ask the user to enter the password.
// 3. If the password matches `correctPassword`, print "Access granted!" and exit.

// Do-loop will run once
// Prompt opulates ...

const correctPassword = 123;
let password;
let passwordCounter = 1; // start on the FIRST attempt
//// if password is wrong, it will increment but log the first attempt as 1

// The code below can be written many ways.
////////////// If it works, it works. But make sure you can explain it! //////////

do {
  password = prompt("Enter the password here");
  if (password !== correctPassword) {
    alert("Incorrect password. Try again...");
    passwordCounter++;
  }
  if (password > 3) {
    alert("Your password has been locked...");
  }
} while (password !== correctPassword && passwordCounter > 3); // if they are not equal...continue the loop

if (password === correctPassword) {
  alert("Access granted!!!"); // logs message if the PASSWORD is true!
}

// Instructions:
// 1. Use `prompt()` to get a starting number from the user.
// 2. Use a `do...while` loop to print numbers in descending order until 1 is reached.

let n = 0;
while (n <= 100) {
  // Fill in the condition
  console.log(n);
  n = n + 20; // Fill in how to increase `n` by 2
}

let isOver;
do {
  isOver = confirm("Do you want to continue?");
} while (isOver === true);

//// confirm function MAKES IT A BOOLEAN VALUE!
//// while (isOver) -> "if isOver is true" => If we click OK in the menu, the value changes to true!

// If the isOver vairbale is true ? continue the menu!
// If the menu you click ok -> continue th loop!
// Ok = true
// Cancel = false
