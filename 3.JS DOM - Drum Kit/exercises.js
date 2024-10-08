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

//Housekeeper construction function.
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

/*----- METHODS ------- */

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

// Method in a construction function
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

/* ---------- ARROW FUNCTIONS -------------------------*/

const hello = function () {
  console.log("Hello");
};

hello();

//Function expression VS arrow function

const hello = () => console.log("Hello");

hello();

//Adding parameters

const goodAfternoon = (surname, age) => {
  console.log(`Hello ${surname}`);
  console.log(`You are ${age} years old`);
};

goodAfternoon("Bro", 25);

//-----------------------------
// Function expression
setTimeout(function () {
  console.log("Good Evening");
}, 3000);

// VS Callback
setTimeout(goodEvening, 3000);

function goodEvening() {
  console.log("Good Evening");
}

// VS Arrow function
setTimeout(() => console.log("Good Evening"), 3000);

/*  ---------- HIGHER ORDER FUNCTIONS --------------------- */
document.addEventListener("keydown", respondToKey(event));

function respondToKey(event) {
  console.log("Key pressed.");
}

/*  ------ CLOSURES ----------- */

function outer() {
  let message = "Testing"; //Variable in outer function's scope

  function inner() {
    console.log(message); // Accessing the outer function's variable
  }
  inner();
}

outer();

// -- With 2 functions ----

function createCounter() {
  let count = 0; //Private variable within the closure

  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count; //Returns the current value of count
  }
  //Both functions have access to the count variable through the closure.
  return { increment, getCount }; //createCounter returns an object with both functions
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

/*  ------ CALLBACKS ----------- */
//By using callbacks we are guaranteeing that the function passed in will execute next.

function hello(callback) {
  console.log("Hello!");
  callback(); //Calling it after printing "hello!"
}
function leave() {
  console.log("Leave");
}
function goodbye() {
  console.log("Goodbye");
}

hello(goodbye);

//----------------------

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayInConsole(result) {
  console.log(result);
}

sum(displayInConsole, 1, 2);

//--- With addEventListener ---

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

//--- With setTimeout ----

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => console.log("All tasks complete"));
  });
});

/*  ------- PROMISES ---------- */

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You DIDN'T walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You DIDN'T clean the kitchen");
      }
    }, 500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve("You take out the trash");
      } else {
        reject("You DIDN'T take out the trash");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores!");
  })
  .catch((error) => console.log(error));

/*  ------- TRY - CATCH - FINALLY ---------- */

try {
  console.log("Start of try runs");
  unicycle;
  console.log("End of try runs -- never reached");
} catch (err) {
  console.log("Error has occured: " + err);
} finally {
  console.log("This always executes");
}
console.log("You have reached the end!");

// THROW
try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));
  if (divisor == 0) {
    throw new Error("You can't divide by zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.log(error);
}

console.log("You have reached the end!");

/*  ------- ASYNC/WAIT ---------- */

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You DIDN'T walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You DIDN'T clean the kitchen");
      }
    }, 500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("You take out the trash");
      } else {
        reject("You DIDN'T take out the trash");
      }
    }, 500);
  });
}

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");
  } catch (error) {
    console.error(error);
  }
}
doChores();
