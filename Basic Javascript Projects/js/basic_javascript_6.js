function ride_function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride."; //bolean function that uses values
}

function vote_function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are not old enough to":"You can";
    document.getElementById("vote").innerHTML = can_vote + " vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myCar = new Car('Blade', 'Killer PSI', 1999);
function myCarfunc() {
    document.getElementById("new_and_this").innerHTML = 
    "My Car is " + myCar.make + " model is " + myCar.model + " made in " +
    myCar.year;
}





document.write(Bigger= (5>1)?"Left number is bigger":"Right number is bigger");