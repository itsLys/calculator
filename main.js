function addNumbers(a, b) {
  return a + b;
}
function subtractNumbers(a, b) {
  return a - b;
}
function multiplyNumbers(a, b) {
  return a * b;
}
function divideNumbers(a, b) {
  return a / b;
}

let firstNum = 0;
let secondNum = 0;
let op;

function operate(op, a, b) {
  let result = 0;
  if (op === "/") {
    result = divideNumbers(a, b);
  } else if (op === "+") {
    result = addNumbers(a, b);
  } else if (op === "-") {
    result = subtractNumbers(a, b);
  } else if (op === "*") {
    result = multiplyNumbers(a, b);
  }
  return result;
}

//When I click a button, it shows the number clicked in the display
const result = document.querySelector(".result");
