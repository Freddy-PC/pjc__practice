/************************CORE CONCEPT PRACTICE*************************************
FOCUS: VARIABLES, CONDITIOONALS, LOOPS, FUNCTIONS, ARRAYS, AND OBJECTS

/* 1
Declare a let variable called greeting and assign the value "Good Morning".
Create a const variable named hour with a value of 9.
Reassign greeting to "Good Afternoon" if the hour is greater than or equal to 12.*/
let greeting = "Good Morning";
const hour = 20;
console.log(`Before the if statment: ${greeting}`);

if (hour > 12) {
  greeting = "Good Afternoon";
}
console.log(`After the if statment: ${greeting}`);

/* 2
Write a program that checks a number stored in the variable temperature.
-If the number is below 0, print "It's freezing!".
-If it’s between 0 and 30, print "It's cold.".
-If it’s above 30, print "It's warm."*/

// Celcius...
let temp = 35;
if (temp < 0) {
  console.log("It's freezing");
} else if (temp >= 0 && temp <= 30) {
  console.log("It's cold");
} else if (temp > 30) {
  console.log("It's warm");
}

/* 3
Create a for loop that prints the numbers 1 to 10.
Add a while loop that sums numbers from 1 to 5 and prints the result.*/
// for (let i = 1; i > 0 && i <= 10; i++) {
//   console.log(`Print numbers: ${i}`);
// }

// Shorter syntax!
// No need to make a variable outide the for loop. It can be declared at the initialization!
for (let i = 1; i <= 10; i++) {
  console.log(`Print numbers 1-10: ${i}`);
}

/* 4
Write a function named multiply that takes two parameters and returns their product.
Call the function with values 4 and 5 and print the result.
Try changing the inputs to negative numbers.*/
function multiply(x, y) {
  return x * y;
}
console.log(`Call function +product: ${multiply(4, 5)}`);
console.log(`Call function -product: ${multiply(-4, 5)}`);

/* 5
Create an array of numbers: [3, 6, 9, 12].
Use a loop to print each number multiplied by 2.
Create an object named car with properties make, model, and year. Print the object.*/
let array = [3, 6, 9, 12];
for (i = 0; i < array.length; i++) {
  console.log(`Print each number multiplied by 2: ${array[i] * 2}`);
}
// i is the label for iteration throught the array
// array[i] = access the value from each index of the array

const obj = {
  make: "Subaru",
  model: "Crosstrek",
  year: 2023,
};
console.log(obj);

/* 6
Declare a let variable isLoggedIn and set it to false.
Change it to true if the username variable equals "admin".*/

/* 7
Create a variable score.
If score is 90 or above, print "A".
If between 80 and 89, print "B".
If between 70 and 79, print "C".
Otherwise, print "F".*/

/* 8
Write a for loop to print only even numbers from 1 to 20.
Create a while loop that multiplies numbers from 1 to 5 and prints the result.*/

/* 9
Write a function greetUser that takes a name and prints "Hello, [name]!".
Call it with different names like "Alice" and "Bob".*/

/* 10
Create an array of strings: ["apple", "banana", "cherry"].
Loop through and print each item in uppercase. -> there is a method for this
Create an object student with name, age, and grade properties. Print each property.*/

/* 11
Declare a variable totalAmount and set it to 100.
Create a constant discountRate set to 0.2.
Calculate the final price after applying the discount and store it in a variable finalPrice.*/

/* 12
Create a program that checks a number stored in a variable age:
-If the age is less than 18, print "You are a minor.".
-If it’s between 18 and 64, print "You are an adult."
-Otherwise, print "You are a senior citizen."*/

/* 13
Create a for loop to print the numbers from 10 down to 1 in reverse.
Use a while loop to print the first 5 multiples of 3.*/

/* 14
Write a function isEven that takes a number and returns true if the number is even, otherwise false. Test the function with values like 10, 15, and 22.*/

/* 15
Create an array of 5 numbers: [10, 20, 30, 40, 50].
Write a loop to calculate the sum of the numbers.
Create an object book with properties title, author, and pages. Add a new property genre and print the updated object.*/

/* 16
Declare variables for firstName and lastName and assign them your name.
Create a fullName variable that combines firstName and lastName.
Print the result using template literals.*/

/* 17
Declare a variable score and assign it a number between 0 and 100.
Print:
"Pass" if score is 50 or higher.
"Fail" if score is below 50.*/

/* 18
Create a for loop that prints the squares of numbers from 1 to 10.
Write a while loop to print numbers from 1 to 5 in reverse.*/

/* 19
Write a function greet that takes a name and a timeOfDay (morning, afternoon, or evening).
Print a greeting like "Good morning, John!".*/

/* 20
-Create an array of fruits: ["apple", "orange", "grape", "banana"].
-Use a loop to print only fruits with more than 5 letters.




/* 21
Declare a variable length set to 10 and a variable width set to 5.
Calculate the area of a rectangle using these variables and print the result.*/

/* 22
Write a program to check if a number stored in num is divisible by 3, 5, or both:
If divisible by 3, print "Fizz".
If divisible by 5, print "Buzz".
If divisible by both, print "FizzBuzz".
If not divisible by 3 or 5, print the input
If not a number, print 'Not a number'*/

/* 23
Write a loop to print the factorial of a number (e.g., 5! = 120).
Use a loop to reverse the characters of a string "hello" and print it.*/

/* 24
Write a function sumArray that takes an array of numbers and returns the sum of all elements.*/

/* 25
Create an object pet with properties type, name, and age. Add a method to print a sentence like: "My dog's name is Max, and he is 4 years old."*/
