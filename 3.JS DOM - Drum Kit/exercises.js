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

//Array inside the object + object inside another object.
let jack = {
  name: "Jack Lewis",
  age: 30,
  education: [
    {
      degree: "B.A English Literature",
      university: "UCLA",
    },
    {
      degree: "M.S Criminology",
      university: "Berkeley",
    },
  ],
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

/* METHODS */

let bellBoy1WithMethod = {
  name: "Timmy",
  age: 19,
  hasWorkPermit: true,
  languages: ["French", "English"],
  moveSuitcase: function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  },
};
bellBoy1WithMethod.moveSuitcase();

/* Method in a construction function*/
function HouseKeeperWithMethod(name, yearsOfExperience, cleaningRepertoire) {
  this.name = name;
  this.yearsOfExperience = yearsOfExperience;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("Cleaning in progress...");
  };
}

let houseKeeper3 = new HouseKeeperWithMethod("Mini", 6, [
  "restaurant",
  "kitchen",
]);

houseKeeper3.clean();

/* 1.3 -------HIGHER ORDER FUNCTIONS--------------------- */
document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
  console.log("Key pressed.");
}

/* CALLBACKS */

function anotherAddEventListener(typeOfEvent, callback) {
  //Detect Event Code

  let eventThatHappened = {
    eventType: "keydown",
    key: "p",
    durationOfKeypress: 2,
  };
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}
anotherAddEventListener("keydown", function (event) {
  console.log(event);
});
