function full_Sentence() { //Function to concatenate strings
    var part_1= "Here I will ";
    var part_2= "say a ";
    var part_3= "nice phrase that is: ";
    var part_4= "Have a lovely day :)";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function Slice_Method() { //Slice Method function
    var Sentence = "In order to achive ones goals the work has to be done, if not, one will not succeed";
    var Section = Sentence.slice(24,30);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() { //String method function
    var x=25;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}

function precision_Method() { //Precision method function
    var x=9876.543210987654321;
    document.getElementById("Precision").innerHTML=x.toPrecision(8);
}

function toFixed_Method() { //toFixed method function
    var x=9.35987;
    document.getElementById("toFixed").innerHTML=x.toFixed();
}

function valueOf_Method() { //valueOf method function
    var text="Hi friends!";
    document.getElementById("valueOf").innerHTML=text.valueOf();
}