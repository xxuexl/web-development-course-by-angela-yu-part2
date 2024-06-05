//? FUNCTIONS: PARAMETERS AND ARGUMENTS
/*1.1 Add a cost for the bottles*/
function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  let numberOfBottles = Math.floor(money / 1.5); //1.5 the cost per bottle
  //With Math.floor we round the number of bottles
  console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);

/*1.2 Life in weeks: Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.*/
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
/*1.3 Functions*/

function buyWater(money) {
  return money % 1.5; //Gives the remainder of this division
}

let change = buyWater(4);
console.log(change);

/*1.4*/
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
