function addNumbers(x,y)    //defining the function
{
    var result = x + y;
    return result;
}

var sum = addNumbers(2,2);  //calling the function
document.write(sum);

function myfunction() {
    document.getElementById("func").innerHTML = "2+2";
}

function myFunction() {
    var sentence = "I am struggling";
    sentence += " alot in javascript lol!";
    document.getElementById("concatenate").innerHTML = sentence;
}