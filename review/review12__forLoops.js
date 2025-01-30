//5 Write a piece of code that will write numbers from 100 to 0 to the console,
// but in steps of 10; so 100, 90, 80... etc.

// for (i = 100; i >= 0; i--) {
//   console.log(`Print numbers from 100 to 0: ${i}`);
// }

//6 Modify the previous program so that it
// asks the user for the first and last number it uses
// instead of 100 and 0 (hint: use the prompt dialog).
// let highLimit = parseInt(prompt("Enter the start number:"));
// let lowLimit = parseInt(prompt("Enter the start number:"));
// //  ...limit will return a string -> parseInt makes it a number
// for (i = highLimit; i >= lowLimit; i -= 10) {
//   console.log(`Print number range from 100 to 0: ${i}`);
// }

// // ******** If a user enters a value that isn't a number
// let highestLimit = parseInt(prompt("Enter the start number:"));
// let lowestLimit = parseInt(prompt("Enter the start number:"));

// if (typeof highestLimit === "number" && typeof lowestLimit === "number") {
//   for (i = highestLimit; i >= lowestLimit; i -= 10) {
//     console.log(`Print number range from 100 to 0: ${i}`);
//   }
// }

// ********** Same as code above
// !Number.isNan(highestLimit)
// if highLimit is NOT a number => Number made the prompt a string value to a number value

// let highestestLimit = parseInt(prompt("Enter the start number:"));
// let lowestestLimit = parseInt(prompt("Enter the start number:"));
// if (!Number.isNaN(highestestLimit) && !Number.isNaN(lowestestLimit)) {
//   for (i = highestestLimit; i >= lowestestLimit; i -= 10) {
//     console.log(`Print number range from 100 to 0: ${i}`);
//   }
// }

//7 Write a program that first writes out all these numbers on the console,
// then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0),
// then only those that are larger than 10 and at the same time smaller than 60.
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

console.log(`\n All numbers:`);
for (let num of numbers) {
  console.log(num);
}

console.log(`\n even numbers:`);

for (let num of numbers) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
console.log(`\n numbers smaller than 10 and larger than 60:`);

for (let num of numbers) {
  if (num > 10 && num < 60) {
    console.log(num);
  }
}
///////////////////////////////////////////////////////////////////////////////////////

//1 Fill in the blanks to make the loop print numbers from 0 to 4.
for (let i = 0; i < 5; i++) {
  console.log(`Print numbers from 0 to 4: ${i}`);
}

//2 Fill in the blank so that the loop prints only odd numbers from 1 to 10.
for (let i = 1; i <= 10; i += 2) {
  console.log(`Prints only odd numbers from 1 to 10: ${i}`);
}
//3  i += 2 -> Iterate through i as (i + 2) so every odd number is printed
// i + 2 = odd number

//Fill in the blanks to make the loop count down from 5 to 0.
for (let i = 5; i >= 0; i--) {
  console.log(`Count down from 5 to 0: ${i}`);
}

//4 Fill in the blank so that the loop adds numbers from 1 to 5 correctly.
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(`Add numbers from 1 to 5: ${sum}`);
