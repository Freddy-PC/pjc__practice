//1 While loop that prints the numbers from 1 - 10
let number = 1;
while (number <= 10) {
  console.log(`This while loop printed the number ${number}`);
  number++;
}

//2 While loop that caluclates the sum of numbers from 1 - 10 (1 + 2 + 3)
// not (numbers <= 1 && numbers >= 20)
// sum = 0 + 1
// sum = 1 + 1
// sum = 2 + 1
// ...
// sum = 9 + 1

let sum = 0; // Initial sum (storage)
let numbers = 1; // Initial number
while (numbers <= 20) {
  sum += numbers; // sum = numbers + sum
  numbers++; // increment the number to the next
  console.log(`The total sum is ${sum}`);
}

//3 do-while loop that starts with the # 10 and
// prints all the numbers down to 1
let ten = 10;
do {
  console.log(`Decrement: ${ten}`);
  ten--;
} while (ten >= 1);

// 4
/* Negative number or 0 = stop the loop
   + and - numbers are truthy values : 0 is a falsy value */
// 10 = You can put a value from 0-10 for a 'base number'
// Bomus: Count the sum of the numbers
let newSum = 0;

do {
  input = parseInt(prompt("Enter a number"), 0);
  alert(`You enetered ${input}...and the sum is ${(sum += input)}`);
} while (input > 0);
