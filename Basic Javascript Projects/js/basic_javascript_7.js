var x = 10; //global variable
function add_numbers_1() {
    document.write(20 + x + "<br>");
}
function add_numbers_2() {
    document.write(x + 100);
}
add_numbers_1();
add_numbers_2();    //local variable works if I delete the global function.

function add_numbers_1() {  //local variable
    var x = 10;
    document.write(20 + x + "<br>");
}
function add_numbers_2() {
    document.write(x + 100);
    }
add_numbers_1();
add_numbers_2();

function add_numbers_1() { //works for me, x loaded no problem in console with other functions present.
    var x = 10; //if I delete other functions then x doesn't load.
    console.log(15+x);
}
function add_numbers_2() {
    console.log(x+100);
}
add_numbers_1();
add_numbers_2();

if (1<5) {
    document.write("The left number is smaller than the number on the right.")
}

function get_Date() {
    if ( new Date() .getHours() < 22) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").nodeValue;
    if (Age >= 20) {
        Eat = "You are old enough to eat!";
    }
    else {
        Eat = "You are not old enough to eat!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Eat;
}