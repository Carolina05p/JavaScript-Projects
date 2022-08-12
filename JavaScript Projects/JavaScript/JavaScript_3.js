function displayType(cartoon) {
    var cartoonType=cartoon.getAttribute("data-cartoon-type");
    alert(cartoonType + " is in the " + cartoon.innerHTML + " world!");
}