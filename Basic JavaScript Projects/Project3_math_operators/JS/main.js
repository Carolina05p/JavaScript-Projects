function addition_Function() { //Function that performs addition 
    var addition = 5+7;
    document.getElementById("Math").innerHTML="5+7="+addition;
}

function subtraction_Function() { //Fumction that performs subtraction
    var subtraction = 6-1;
    document.getElementById("Math").innerHTML="6-1="+subtraction;
}

function multiplication() { //Function that performs multiplication
    var simple_Math = 8*9;
    document.getElementById("Math").innerHTML="8*9="+simple_Math;
}

function division() { //Function that performs division
    var simple_Math = 120/6;
    document.getElementById("Math").innerHTML="120/6="+simple_Math;
}

function more_Math() { //Function that performs multiple math operations at once
    var simple_Math = (3-2)*5/7+3;
    document.getElementById("Math").innerHTML="3 minus 2, multiplied by 5, divided in seven and then added by 3 equals "+simple_Math;
}

function modulus_Operator() { //Function that gives the remainder of a division
    var simple_Math = 50%5;
    document.getElementById("Math").innerHTML="When you divide 50 by 5 you have a remainder of: "+simple_Math;
}

function negation_Operator() { //Function that returns the opposite (or negative) of something
    var x = 5;
    document.getElementById("Math").innerHTML=-x;
}

var x=7; //Gives an increment of one to the number given
x++;
document.write(x);

var x=10; //Decreases the number by one
x--;
document.write(x);

window.alert(Math.random()*85); //Gives a random number between the numbers given