function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = " 2 + 2 = " + addition;
}

function myfunction() {
    var sentence = "I am struggling";
    sentence += " alot in javascript lol!";
    document.getElementById("concatenate").innerHTML = sentence;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("sub").innerHTML= "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_math = 6 * 8;
    document.getElementById("multi").innerHTML= "6 x 8 = " + simple_math;
}

function division() {
    var simple_division = 48 / 6;
    document.getElementById("div").innerHTML = " 48 / 6 = " + simple_division;
}

function more_math() {
    var all_math = (1+2) * 10 /2 -5;
    document.getElementById("all").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + all_math;
}

function modulus_Operator() {
    var simple_remainder = 25%6;
    document.getElementById("remainder").innerHTML="When you divide 25 by 6 you have a remainder of: " + simple_remainder;
}

function negation_Operator() {
    var x= 10;
    document.getElementById("unary").innerHTML= -x;
}

var x = 5;
x++;
document.write(x);

var x = 5.25;
x--;
document.write(x);

window.alert(Math.random());
function pi_Function(){
    document.getElementById("pi").innerHTML = Math.PI;
}


