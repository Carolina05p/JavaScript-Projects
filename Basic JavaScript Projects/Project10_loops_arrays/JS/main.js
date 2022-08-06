function Call_Loop() {
    var Digit = "";
    var x = 5;
    while (x < 21) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}