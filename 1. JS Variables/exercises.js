/*1.1 Given the existing code below, can you write some code so that their values are switched around?*/
let a = "3";
let b = "8";

/***********Do not change the code above 👆******
You are NOT allowed to type any numbers nor redeclare the variables a and b. */
let c = a;
a = b;
b = c;
/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b);

/*1.2 Concatenation exercise */
let message = "Hello";
let name1 = "Angela";
console.log(message + " there, " + name1);

/*1.3 Create a prompt where the user can enter a text/tweet, and tell him how many characters
 he has written, and also how many characters they have remaining out of 140
 characters*/
let tweet = prompt("Compose your tweet:");
let tweetCount = tweet.length;
let remainingCharacters = 140 - tweetCount;
alert(
  "You have written " +
    tweetCount +
    " characters, you have " +
    remainingCharacters +
    " characters remaining."
);

//SLICE METHOD
let name2 = "Susan";
name2.slice(0, 4); // 4-0 = 4 characters. Result will be "Susa"

/*1.4 Create an alert that cuts the tweet down to 140 characters*/
