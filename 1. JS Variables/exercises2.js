//? FUNCTIONS: PARAMETERS AND ARGUMENTS
/*2.1 Add a cost for the bottles*/
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  let numberOfBottles = Math.floor(money / 1.5); //1.5 the cost per bottle
  //With Math.floor we round down the number of bottles
  console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);

/*2.2 Life in weeks: Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.*/
function lifeInWeeks(age) {
  let yearsRemaining = 90 - age;
  let days = yearsRemaining * 365;
  let weeks = yearsRemaining * 52;
  let months = yearsRemaining * 12;
  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
}
lifeInWeeks(30);

//? FUNCTIONS: OUTPUTS AND RETURN VALUES

/*2.3 Basic functions with return*/

function buyWater(money) {
  return money % 1.5; //Gives the remainder of this division
}

let change = buyWater(4);
console.log(change);

/*2.4 Adding more inputs*/
function getSoda(money, costPerCan) {
  console.log("leaveHouse");

  console.log("buy " + calcSodas(money, costPerCan) + " cans of soda");
  console.log("headHouse");
  console.log("enterHouse");
  return calcChange(money, costPerCan);
}

function calcSodas(startingMoney, costPerCan) {
  let numberOfCans = Math.floor(startingMoney / costPerCan);
  return numberOfCans;
}

function calcChange(startingAmount, costPerCan) {
  let moneyChange = startingAmount % costPerCan;
  return moneyChange;
}

console.log("Hello friend, here is your " + getSoda(10, 3) + " change");

/*2.5 BMI calculator challenge: Create a BMI calculator using JS.*/

function bmiCalculatorA(startingWeight, height) {
  let bmia = startingWeight / (height * height); //?Alt for height: Math.pow(height, 2);
  return Math.round(bmia);
}

let bmia = bmiCalculatorA(65, 1.8);
console.log(bmia);

/*2.6 MATH.RANDOM*/
let random = Math.random();
random = random * 6; //If let like this, range would be from 0 to 5.999999 (floating-point number)...
random = Math.floor(random) + 1; //Now it goes from 1 to 6
console.log(random);

/*2.7 Exercise: Love calculator*/

let yourName = prompt("What's your name?");
let hisName = prompt("What's his name?");
let lovePercentage = Math.random() * 100;
lovePercentage = Math.floor(lovePercentage) + 1;
alert("You have " + lovePercentage + "% love score!");

/*2.8 IF/ELSE CONDITIONALS */
if (track === "clear") {
  goStraight();
} else {
  turnRight();
}

prompt("What's your name?");
prompt("What's his name?");
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore > 70) {
  alert(
    "Your love score is " +
      loveScore +
      "% " +
      "You love each other like Kanye loves Kanye."
  );
} else {
  alert("Your love score is " + loveScore + "%");
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
  alert(
    "Your love score is " +
      loveScore +
      "%" +
      " You go together like oil and water."
  );
}

/*2.9 Exercise: Bmi calculator with if/else */

function bmiCalculator(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  let interpretation = " ";

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}
bmiCalculator(74, 1.6);

/*2.10 Exercise: Leap year with if/else */

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}
isLeap(2012);

/* Alternative:
function isLeap(year) {
  if (year % 4 === 0) {
    return "Leap year.";
  } else if (year % 100 === 0) {
    return "Not leap year.";
  } else if (year % 400 === 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}
isLeap(2012); */

/*2.11 ARRAYS + INCLUDES()*/
let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
let guestName = prompt("What's your name?");

if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry,maybe next time.");
}

/*2.12 Arrays: FizzBuzz exercise*/
let outputBasic = [];
let countBasic = 1;
function basic() {
  outputBasic.push(countBasic);
  countBasic++;
  console.log(outputBasic);
}

//-------------------------------------------

let output = [];
let count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;

  console.log(output);
}

/*2.13 Arrays: Selecting a random name from an array exercise*/
let names = ["Angela", "Susana", "Matt", "Carl"];

function whosPaying(names) {
  let numberOfPeople = names.length;
  let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  let randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";
}

console.log(whosPaying(names));
