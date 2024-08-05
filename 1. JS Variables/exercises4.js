/* 4.1  FOR LOOPS: CONTROL STATEMENTS */

for (let i = 1; i < 2; i++) {
  console.log(i);
}

/* Fizzbuzz with for loops */
let output = [];

function fizzBuzz() {
  for (let count = 100; count >= 1; count--) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
fizzBuzz();

/* 99 bottles of beer */

let numberOfBottles = 99;
while (numberOfBottles >= 1) {
  let bottleWord = "bottles";
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  } else {
    bottleWord = "bottles";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
