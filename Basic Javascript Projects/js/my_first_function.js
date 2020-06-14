funtion my_first_function() {                                 //Defining a function and naming it
    var str =  "This text is green!";                         //defining a variable and giving it a string value
    var result = str.fontcolor("green");                      //using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //putting valur of result into html element with green_text id
}