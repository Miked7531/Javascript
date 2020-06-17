function full_Sentence() {  //combines two or more variables!
    var part_1 = "I have ";
    var part_2= "made this ";
    var part_3= "into a complete ";
    var part_4= "sentence ";
    var whole_sentence= part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {   //slice displays a part of something.
    var Sentence = "Johnny is a funny guy, but a hard worker.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upperFunction() {
    var str = "Upper Case Letters";
    var res = str.toUpperCase();
    document.getElementById("Up").innerHTML = res;
}

function searchFunction() {
    var str = "Visit Alaska";
    var n = str.search("Alaska");
    document.getElementById("search").innerHTML = n;
}

function string_Method() {
    var x = 169;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

function fixedFunction() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("fix").innerHTML = n;
}

function valueFunction() {
    var str = "Value Time";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}