document.query;

//?------------MINI EXERCISES TO DO INSIDE THE CONSOLE-----------
/* 1:Select the third li and change the text from the word "Third" to
anything you want, but you can't touch the HTML, do it inside the console.
ANSWER: */
document.firstElementChild.lastElementChild.querySelector(
  "ul"
).lastElementChild.innerHTML = "Best";
/*2:Change the text color of the second Google link to
red. ANSWER: */
document.querySelector("li a").style.color = "red";

/*3:Use JS to change the background color of the "Click Me" button to yellow. */
document.querySelector("button").style.backgroundColor = "yellow";
/*----------------SELECTING HTML ELEMENTS WITH JS---------------------
TARGETTING VARIOUS ELEMENTS

1.document.getElementsByTagName:

document.getElementsByTagName("li"); --> 
If we run this line of code we get an array that contains all the list items
since "getElements" is plural.

document.getElementsByTagName("li")[2].style.color = "purple";  -->
We have to select the item in the array(n. of index) that we want to change.

document.getElementsByTagName("li").length; -->
If we want to know how many elements there are that have the tag name "li".


2.document.getElementsByClassName:   
document.getElementsByClassName("btn"); -->
Select elements based on the name of the class.

document.getElementsByClassName("btn")[0].style.color = "red"; -->
Even if we have only one item, it gives us back an array, so we still 
have to select the first item in the array using [0].


TARGETTING A SINGLE ELEMENT

3.document.getElementById:
document.getElementById("title"); -->
We only get back one item instead of an array, since every id should be unique.

document.getElementById("title").innerHTML = "Good Bye"; -->
It allows us to change the innerHTML.


4.document.querySelector:
We write the name of the element to select classes. With selectors we can 
combine different things.
document.querySelector("h1");

document.querySelector("#title");  --> # pound sign to specify an id.

document.querySelector(".btn");    --> . dot to specify a class

document.querySelector("li a");    --> Selects the anchor tag inside the list element.
When doing hierarchical selectors, there's a space between 2 selectors.

document.querySelector("li.item"); --> If both items are in the same element
then there are no spaces.

document.querySelector("#list a"); --> Anchor tag that is inside an unordered
list with an id of list. It's it grandchild.


5.document.querySelectorAll:
We use it if we want to get all the objects that match a selector.
document.querySelectorAll("#list .item");

document.querySelectorAll("#list .item")[2].style.color = "blue";
*/

/*---------MANIPULATING AND CHANGING STYLES OF HTML ELEMENTS WITH JS---------------------
Camel casing is standard for naming methods and properties in JS.
In most cases the names are the same, but there are no dashes.
-The values have to be represented as strings, even numbers. 

document.querySelector("h1").style.fontSize = "5rem";  --> 
document.querySelector("h1").style.visibility = "hidden";                              */
