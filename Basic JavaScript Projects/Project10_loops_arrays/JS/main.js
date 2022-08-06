function Call_Loop() {
    var Digit = "";
    var x = 5;
    while (x < 21) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var y;
function for_Loop() {
    for (y=0; y<Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}