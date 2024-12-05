/* Task: Array Reduction
=========================
Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array. */

const numArr = [10, 13, 14, 21, 22, 9, 18];

const addResult = numArr
  .filter((num) => num % 2 === 0)
  .reduce((prev, current) => prev + current, 0);
console.log(addResult);
