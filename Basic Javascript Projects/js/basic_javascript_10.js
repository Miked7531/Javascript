var x = 82;     //let keyword, lets variables have block scopes.
document.write(x);  //if I remove the defer attribute in script this runs.
{
    let x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + x);

function count_to_twenty() {
    var digit= "";
    var x = 1;
    while (x<20) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_twenty").innerHTML = digit;
}

function strFunction() {    //returns the number of characters in the string
    var str = "Welcome to string"; //this is the string
    var n = str.length;
    document.getElementById("strlength").innerHTML = n;
}

var Fish = ["Bass", "Trout", "Salmon", "Koi", "Clown fish"];
var content = "";
var Y;
function for_loop() {
    for (Y=0;Y<Fish.length; Y++) {
        content += Fish[Y] + "<br>";
    }
    document.getElementById("list_of_fish").innerHTML = content;
}

function dog_pics() {
    var dog_picture = [];
    dog_picture[0] = "snoring";
    dog_picture[1] = "eating";
    dog_picture[2] = "playing";
    dog_picture[3] = "barking";
    document.getElementById("dog").innerHTML = "In this picture, the dog is " +
        dog_picture[1] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"drums", brand:"Yamaha", color:"purple"};
    Musical_Instrument.color = "yellow";
    Musical_Instrument.price = "$1200";
    document.getElementById("constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var m = returFunction(5, 5);

function returFunction(a , b) {
    return a * b;
}
document.getElementById("returnex").innerHTML= m ;

let car = {
    make:"dodge ",
    model: "viper ",
    year: "2020 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

function brFunction() {
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i===3) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function ctFunction() {
    var cont = "";
    var l;
    for (l=0; l < 6; l++) {
        if (l===4) {
            continue;
        }
        cont += "The number is " + l + "<br>";
    }
    document.getElementById("contin").innerHTML= cont;
}