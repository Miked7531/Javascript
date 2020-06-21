window.onload = function () {

}

var noarrow;
noarrow = function() {
    return "Function with no arrows";
}
document.getElementById("demo").innerHTML= noarrow();

var arrow;
arrow = function() {
    return "Function with arrows!";
}
document.getElementById("doomo").innerHTML = arrow();

var numbers = [1,3,5,6,7,10,20];
var someOver7 = numbers.some(myFunction);

document.getElementById("numbdisplay").innerHTML = "Some over 7 is " + someOver7;

function myFunction(value, index, array) {
  return value > 7;
}