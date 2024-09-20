// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);


const testNumbers = Array.from({ length: 150001 }, () => Math.floor(Math.random() * 9999999));

console.time('getRange');
console.log(`The range of your numbers is ${getRange(testNumbers)}.`);
console.timeEnd('getRange');

console.time('getRangeAgain');
console.log(`The range of your numbers AGAIN is ${getRangeAgain(testNumbers)}.`);
console.timeEnd('getRangeAgain');


// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
  return getSum(numbers)/numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
  let min = numbers[0];

  if (numbers.length > 1)
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min ) {
        min = numbers[i];
      }
    }
  return min;

}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
  let max = numbers[0];

  if (numbers.length > 1)
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max ) {
        max = numbers[i];
      }
    }
  return max;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
  let max = numbers[0],
      min = numbers[0];

  if (numbers.length > 1)
    for (let i = 1; i < (numbers.length/2); i++) {
      if (numbers[i] > max ) {
        max = numbers[i];
      } else if (numbers[i] < min ) {
        min = numbers[i];
      }
      if (numbers[numbers.length - i] > max ) {
        max = numbers[numbers.length - i];
      } else if (numbers[numbers.length - i] < min ) {
        min = numbers[numbers.length - i];
      }
    }
  return max - min;
}

function getRangeAgain(numbers) {
  let min = numbers[0],
      max = numbers[0];

    if (numbers.length > 1) {
      for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > max) {
          max = number;
        }  else if (number < min) {
          min = number;
        }
      }
    }
    return max - min;
}


/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
  let evens = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (!(number%2)) {
      evens.push(number);
    }
  }
  return evens;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
  let odds = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number%2) {
      odds.push(number);
    }
  }
  return odds;
}
