function my_Dictionary() { //Creates a "dictionary" list
    var Food = {
        Type: "Fruit",
        Color: "Red",
        Quantity: 5,
        Name: "Strawberry",
        Taste: "Sour"
    };
    delete Food.Name; //Deletes an item from my dictionary
    document.getElementById("Dictionary").innerHTML=Food.Name; //Displays the selected key from the dictionary
}