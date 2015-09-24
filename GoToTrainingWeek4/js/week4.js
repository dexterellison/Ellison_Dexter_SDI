
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