/*1.1 Parameters and arguments*/
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
