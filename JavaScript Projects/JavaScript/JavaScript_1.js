function Animal_Function() {
    var Animal_Output;
    var Animals=document.getElementById("Animal_Input").value;
    var Animal_String=" is a great animal!";
    switch (Animals) {
        case "Dog":
            Animal_Output="Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output="Cat" + Animal_String;
        break;
        case "Dolphin":
            Animal_Output="Dolphin" + Animal_String;
        break;
        case "Elephant":
            Animal_Output="Elephant" + Animal_String;
        break;
        default:
            Animal_Output="Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML=Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML="The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);