alert(document.getElementById("p1").innerHTML);

function myFunction() {
    var x = "delay";
    document.getElementById("delay").innerHTML = x;
}

function count_to_ten() {
    var digit= "";
    var x = 1;
    while (x<11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("counting_to_ten").innerHTML = digit;
}