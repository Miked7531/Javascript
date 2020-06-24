function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function openForm() {
    document.getElementById("pop").style.display = "block";
}
  
function closeForm() {
    document.getElementById("pop").style.display = "none";
}