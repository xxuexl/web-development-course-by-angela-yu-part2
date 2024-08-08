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

//-------- CONSTRUCTOR FUNCTIONS ---------
//They are shorter than the previous example. 1st letter of the function's name has to be capitalized.
function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}

//Initialization of new object with the keyword "new".
let bellBoy1alt = new BellBoy("Timmy", 19, true, ["French", "English"]);
let bellBoy2 = new BellBoy("Jimmy", 29, false, ["German", "English"]);

/*Housekeeper construction function*/
function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
}

let houseKeeper2 = new HouseKeeper("Susan", 5, [
  "restaurant",
  "lobby",
  "kitchen",
]);

console.log(houseKeeper2.name); // We get Susan
console.log(houseKeeper2.cleaningRepertoire); // We get ["restaurant", "lobby", "kitchen"]
