document.write(typeof "Word");

document.write("155" + 22);

function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}

function not_Number() {
document.getElementById("Test").innerHTML=isNaN('Hello!'); //NaN=Not a number function.
}

function Number() {
document.getElementById("Test").innerHTML=isNaN('552');
}

document.write(2E310); //Infinity

document.write(-2E310); //Negative Infinity

console.log(25+45)

console.log(10>30)

document.write(2+2 == 4); //Comparison using the double equal symbol.

document.write(5 == 8);

x=55; //One equal symbol assigns a value.
y=55;
document.write(x===y); //Comparison using the triple equal symbol.

a=2;
b=3;
document.write(a===b);

x=24;
A="24";
document.write(x===A);

A="Hi";
B=3;
document.write(A===B);

document.write(3<4 && 5>2); //From here on are examples of the differents logic operators displayind either true or false outputs.

document.write(3>4 && 5>2);

document.write(10>5 || 5>10);

document.write(100<10 || 25<15);

function not_Function() {
    document.getElementById("Not").innerHTML=!(50<100);
}

function not() {
    document.getElementById("Not").innerHTML=!(80<10);
}