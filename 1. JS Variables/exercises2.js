/*1.7 Parameters and arguments*/
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
