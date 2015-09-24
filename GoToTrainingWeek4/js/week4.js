
/*
Dexter Ellison
SDI #2
GoTo Training Week #4
09/21/2015
 */

//alert("Testing to see if connected.")

//Create a file that will give us a random number between two numbers

//Ask the user for the min number
var minNum = prompt("Let's find a number between two numbers!\nWhat is the min number:");

//parse int the variable
//minNum=parseInt(minNum);
//console.log(minNum);
//Validate the prompt is not blank and it is a number
while(minNum==="" || isNaN(minNum)){
    //re-prompt the user
    if(minNum===""){
        minNum = prompt("Please do not leave blank.\nWhat is the min number:");

    } else if(isNaN(minNum)){

        minNum = prompt("Please do only use numbers.\nWhat is the min number:");
        //minNum=parseInt(minNum);
    }

}

/*
Basic structure of a while loop

 //Declare a variable
 var num = prompt("Type in a number");

 while( x >6 ){  //condition to test

    //Some sort of change to the variable to our condition to test.
    x++;


 */

//Prompt the user for max number
var maxNum = prompt("What is the max number:");

//Validate directly after the prompt.
while(maxNum==="" || isNaN(maxNum)){
    maxNum = prompt("Please do not leave blank and only use numbers.\nWhat is the max value:");

}

//What if I wanted to validate words
//Ask a yes or no question
var happy = prompt("Are you happy today?");
//convert to all lowercase
happy = happy.toLowerCase();

while(happy !="yes" && happy!="no"&& happy !="maybe"){
    happy = prompt("Please only use yes, maybe or no.\nAre you happy today?");
}


//Function call - "go button" that runs the function
//Arguments go inside of the function call ()
//Create a variable to catch the return value.
var returnedValue = randomizr(minNum, maxNum);

console.log("Your random number between "+minNum+" and "+maxNum+" is "+returnedValue);


//Create a function to calculate the random number
//parameters go inside of ()
//Parameters are temporary variable that can only accessed inside of the function.
// They catch the arguments that are thrown into the function.
//It makes the code more flexible
// We DO NOT  want to use main code variables inside of functions

function randomizr(min, max){

    //Generate our random number
    var randomNumber = Math.round( Math.random()*(max-min)+Number(min));
    //console.log(randomNumber)

    //return the value to our main code
    return the randomNumber;

}