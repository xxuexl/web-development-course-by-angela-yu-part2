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

//? SLICE METHOD
let name2 = "Susan";
name2.slice(0, 4); // 4-0 = 4 characters. Result will be "Susa"

/*1.4 Create an alert that cuts the tweet down to 140 characters*/
let tweet2 = prompt("Compose your tweet:");
let tweetUnder140 = tweet2.slice(0, 140);
alert(tweetUnder140);
// Short version:     alert(prompt("Compose your tweet:").slice(0, 140));

//? toUpperCase() and toLowerCase() METHODS
let japaneseSurname = "Kinomoto";
japaneseSurname = japaneseSurname.toUpperCase();
let pet = "MoCHI";
pet = pet.toLowerCase();

/*1.5 Create an alert that capitalises the first letter of the surname. 
Optional: Add the option that changes the rest of the surname
to lower case if necessary.*/
let surname = prompt("Introduce your surname, please:");
let firstLetter = surname.slice(0, 1);
let upperCaseLetter = firstLetter.toUpperCase();
let restSurname = surname.slice(1, surname.length);
restSurname = restSurname.toLowerCase();
let capitalisedSurname = upperCaseLetter + restSurname;
alert("Hello, " + capitalisedSurname);

/* 
1 - I created a variable that stores the surname that the user enters via prompt
2 - I capitalised the 1st letter of their surname
   a - Isolated the 1st letter
   b - Turned the 1st letter to upper case
   c - Isolated the rest of the surname
   d - Change the rest of the surname to lower case
   e - Concatenated the 1st letter with the rest of the surname 
3 - I used the capitalised version to greet the user using an alert */

/*1.6 Basic Arithmetic*/
let dogAge = prompt("How old is your dog?");
humanAge = (dogAge - 2) * 4 + 21;
alert("Dear human, your dog is " + humanAge + " years old in human years");
