/*
Dexter Ellison
9/16/2015
GoTo Week #3
Section 02
 */

//alert("Testing to see if connected.");

//Create an array of fruit names and then sort it

//Array - variable that holds multiple variables
//Index # of an array always starts with 0!!

var bowlOfFruit = ["apple", "banana", "pear", "peach",];

//See whole array
console.log(bowlOfFruit);

//Console.log the pear
console.log(bowlOfFruit[2]);

//How many items are in an array?
//length property - access this by using dot syntax
// Fancey term for use a period
console.log(bowlOfFruit.length);

//Count the number of pears in our fruit bowl

//Create a variable that will keep track of many pears
there are.
var totalNumPears = 0;

//Test each item in the array and check if it is a pear

//Basic structure of a conditional
// if (condition to test) {code that will run if true}

// "7" == 7 - true
// "7" === 7 - false
// prompts always return strings!!

if(bowlOfFruit[0]=="pear"){
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This is a pear");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
} else {
    consol.log("This fruit is not a pear")
}