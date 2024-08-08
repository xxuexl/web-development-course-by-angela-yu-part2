/* 1.1 Create a calculator that takes two inputs and a function as an input.
Create functions for: add, multiply,divide and subtract. */

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

/* 1.2 ------------- OBJECTS ---------------------- */

let bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
};

let houseKeeper1 = {
  name: "Jane",
  yearsOfExperience: 7,
  cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
};
