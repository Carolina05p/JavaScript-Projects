var x=25; //Scope global variable function example
function Add_numbers_1() {
    document.write(10+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+55);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //Scope local variable function example
    var y=5;
    document.write(15+y+"<br>");
}
function Add_numbers_4() {
    document.write(y+10);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() { //Usisng console.log to debug and see in console whats the error
    var a=7;
    console.log(8+a);
}
function Add_numbers_6() {
    console.log(a+9);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() { //Functions using the if statement 
    if (new Date().getHours()<21) {
        document.getElementById("Check-in").innerHTML="Checking-in how you feel today?";
    }
}

function want_Date() {
    if (new Date().getHours()<23) {
        document.getElementById("Date").innerHTML="Want to know the date? ";
    }
}

function Age() { //Function using the else statement
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are allowed to drink alcohol legally!";
    }
    else {
        Drink = "You are not allowed to drink alcohol legally!";
    }
    document.getElementById("What's_your_age?").innerHTML = Drink;
}

function Time_function() { //Function using else if function to get the time of day
    var Time = new Date().getHours();
    var Reply;
    if(Time <12 == Time >0) {
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "Itl is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}