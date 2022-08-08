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

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture [0] = "playing";
    Dog_Picture [1] = "sleeping";
    document.getElementById("Array").innerHTML = "Here, the dog is " + Dog_Picture [1] + ".";
}

function constant_function() {
    const Animal = {type:"dog", name:"Brandy", color:"brown"};
    Animal.color = "black";
    Animal.price = "$3,000";
    document.getElementById("Constant").innerHTML = "The price for the " +
        Animal.type + " is " + Animal.price;
}

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

function myFunction() {
    return Math.PI;
  }
  document.getElementById("return").innerHTML = myFunction();

  let car = {
    make:"Nissan",
    model:"Rogue",
    year:"2018",
    color:"White",
    description: function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
  };
  document.getElementById("Car_Object").innerHTML = car.description();