/* Task: Function Composition
==============================
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */

function squareNum(val) {
  return val * val;
}
function doubleNum(val) {
  return val * 2;
}
function addNum(val) {
  return val + 5;
}

function composeFunction(val) {
  const square = squareNum(val);
  const double = doubleNum(square);
  const add = addNum(double);

  return add;
}

const result = composeFunction(4);
console.log(result);
