function My_First_Function() { //Defining a function and namig it
    var str="This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML=str; //Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}

function myFunction() {
    var sentence="This course";
    sentence +=" is teaching me a lot!";
    document.getElementById("Concatenate").innerHTML=sentence;
}