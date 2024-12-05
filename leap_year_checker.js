/* Leap Year Checker
=====================
Write a function that determines whether a given year is a leap year.
Example: Happy New Year */

function findLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year!";
  }
  return "Not Leap Year!";
}

const sendYear = findLeapYear(2024);
console.log(sendYear);
