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

var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear" "banana", "kiwi", "pear", "strawberry", "pear"];

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

if(bowlOfFruit[0]==="pear"){
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This is a pear");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
} else {
    consol.log("This fruit is not a pear")
}

if(bowlOfFruit[1]==="pear"){
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This is a pear");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
} else {
    consol.log("This fruit is not a pear");
}

if(bowlOfFruit[2]==="pear"){
    //This code will run if true
    //Add 1 to the total numbers of pears
    console.log("This is a pear");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
} else {
    consol.log("This fruit is not a pear");

    if(bowlOfFruit[3]==="pear"){
        //This code will run if true
        //Add 1 to the total numbers of pears
        console.log("This is a pear");
        totalNumPears++; //totalNumPears = totalNumPears + 1;
    } else {
        console.log("This fruit is not a pear");
    }

    console.log("There are "+totalNumPears+" pear(s) in the fruit bowl.");


//Create another varible to track pears
Var pearNumbeer = 0

//Create a loop for repetitive code.

// For Loop Structure
//for(initializing a counting variable; condition to test; increment of change) { code to run for each time we loop }

for(var i =0; i<bowlOfFruit; i++) {
    console.log("Inside the loop, i =" + i);
    console.log(bowlOfFruit[i]);
    //Test if the array item is pear
    if(bowlOfFruit[i]==="pear"){
        console.log("Found a pear");
        pearNumber++;
    } else{
        console.log("Fruit is not a pair")

    }

}
console.log("The total number of pears in the bowl is"+pearNumber);




