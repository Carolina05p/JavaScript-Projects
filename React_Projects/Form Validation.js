function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function openForm() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm2").style.display = "none";
}