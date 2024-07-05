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

function bmiCalculator(startingWeight, height) {
  let bmi = startingWeight / (height * height); //?Alt for height: Math.pow(height, 2);
  return Math.round(bmi);
}

let bmi = bmiCalculator(65, 1.8);
console.log(bmi);

/*2.6 MATH.RANDOM*/
let random = Math.random();
random = random * 6; //If let like this, range would be from 0 to 5.999999 (floating-point number)...
random = Math.floor(random) + 1; //Now it goes from 1 to 6
console.log(random);

/*Love calculator*/

let yourName = prompt("What's your name?");
let hisName = prompt("What's his name?");
let lovePercentage = Math.random() * 100;
lovePercentage = Math.floor(lovePercentage) + 1;
alert("You have " + lovePercentage + "% love score!");
