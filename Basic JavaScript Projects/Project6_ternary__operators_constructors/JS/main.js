function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make,Model,Year,Color) { //Building a constructor sentence
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Keyword(Word1,Word2) { //Example 2 of constructor functions
    this.Keyword_Word1=Word1;
    this.Keyword_Word2=Word2;
}
var one=new Keyword("Hi,Everyone!");
var two=new Keyword("Everyone!,Hello");
function new_Keyword() {
    document.getElementById("New_and_This").innerHTML="The phrase I want to say is " + one.Keyword_Word1;
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var nottrue=new Person("Laura","Gomez",18,"Brown"); //Used the reserved word "true" and did not work so changed it.
function reserved() {
    document.getElementById("Reserved").innerHTML="Can't display a reserved keyword" + nottrue.firstName;
}

function count_Function() { //Nested function whiuch is a function within another function.
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var starting_point = 5;
        function Plus_One() {starting_point += 7;}
        Plus_One();
        return starting_point;
    }
}