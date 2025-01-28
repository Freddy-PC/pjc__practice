//1 While loop that prints the numbers from 1 - 10
let number = 0;
while (number < 10) {
  number++;
  console.log(number);
}

// While loop that caluclates the sum of numbers from 1 - 10 (1 + 2 + 3)
let sum = 0; // Initial sum (storage)
let numbers = 1; // Initial number
while (numbers <= 1 && numbers >= 10) {
  sum += numbers; // sum = numbers + sum
  number; // increment the number
}
console.log(`The total sum is ${sum}`);

//3 do-while loop that starts with the # 10 and
// prints all the numbers down to 1
do {
  let ten = 10;
  ten--;
} while (ten < 1);

// 4
/* Negative number or 0 = stop the loop
   + and - numbers are truthy values : 0 is a falsy value */
// 10 = You can put a value from 0-10 for a 'base number'
// Bomus: Count the sum of the numbers
do {
  let sum;
  input = parseInt(prompt("Enter a number"), 10);
} while (input > 0);
