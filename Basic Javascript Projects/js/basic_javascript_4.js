function my_dictionary() {
    var animal = {
        species:"Dog",
        color:"Black",
        breed:"Labrador",
        age:5,
        sound:"Bark!",
    };
    document.getElementById("dictionary").innerHTML = animal.sound;
}

function my_bigbook() {
    var elements = {
        H:"Hydrogen",
        K:"Potassium",
        Na:"Sodium",
        Ar:"Argon",
    };
    delete elements.K;
    document.getElementById("element").innerHTML = elements.K;
}