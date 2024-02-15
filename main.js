const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#del");
const pointBtn = document.querySelector("#point");
const equalBtn = document.querySelector("#equal");
const negativeSign = document.querySelector("#negative");
const lastDisplay = document.querySelector(".last-display");
const display = document.querySelector(".display");

let firstNum = "";
let secondNum = "";
let currentOperator = null;
let shouldReset = false;

numbers.forEach((number) => {
  number.addEventListener("click", () => appendNumber(number.textContent));
});

function appendNumber(number) {
  if (display.textContent === "0" || shouldReset) reset();
  display.textContent += number;
  shouldReset = false;
}

function reset() {
  display.textContent = "";
}

clearBtn.addEventListener("click", () => clear());

function clear() {
  firstNum = "";
  secondNum = "";
  currentOperator = null;
  display.textContent = "0";
  lastDisplay.textContent = "";
}
pointBtn.addEventListener("click", () => appendPoint());
function appendPoint() {
  if (display.textContent === "") display.textContent = "0";
  if (display.textContent.includes(".")) return;
  display.textContent += ".";
}
delBtn.addEventListener("click", () => del());

function del() {
  display.textContent = display.textContent.toString().slice(0, -1);
}

operators.forEach((operator) =>
  operator.addEventListener("click", () => setOperation(operator.textContent))
);

function setOperation(operator) {
  if (currentOperator !== null) evaluate();
  firstNum = display.textContent;
  lastDisplay.textContent = `${display.textContent} ${operator}`;
  reset();
  currentOperator = operator;

  // currentOperator = operator;
  // display.textContent += operator;
}
equalBtn.addEventListener("click", () => evaluate());

function evaluate() {
  if (currentOperator === null) return;
  secondNum = display.textContent;
  display.textContent = roundResult(
    operate(currentOperator, firstNum, secondNum)
  );
  currentOperator = null;
  lastDisplay.textContent = "";
  shouldReset = true;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}
function operate(op, a, b) {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
      return add(a, b);
    case "−":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return null;
  }
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function sqrt(a) {
  return a ** 0.5;
}
function sqrd(a) {
  return a ** 2;
}
function oneOver(a) {
  return 1 / a;
}
