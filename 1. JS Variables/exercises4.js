/* 4.1  FOR LOOPS: CONTROL STATEMENTS */

for (let i = 1; i < 2; i++) {
  console.log(i);
}

/* 4.2 Fizzbuzz with for loops:
The goal is to write a function that prints numbers from 1 to 100, but with a twist:
For multiples of 3, print "Fizz" instead of the number.
For multiples of 5, print "Buzz" instead of the number.
For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */

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

/* 4.3 99 bottles of beer challenge: Print the lyrics of the song "99 Bottles of Beer." 
The song's lyrics decrement the number of bottles with each verse until there are no more bottles left */

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

/* 4.4 Fibonacci exercise: 
Fibonacci sequence:0, 1, 1, 2, 3, 5, 8, 13, 21 ... Where every number is the sum of the two previous ones.
Create a function where you can call it by writing the code: fibonacciGenerator (n).
Where n is the number of items in the sequence.
So I should be able to call: fibonacciGenerator(3) and get [0,1,1] as the output. */
function fibonacciGenerator(n) {
  let output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]); // [0,1,1]
    }
  }
  return output;
}

output = fibonacciGenerator(6);
console.log(output);
