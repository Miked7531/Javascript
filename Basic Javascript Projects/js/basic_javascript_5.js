document.write(typeof "word");
document.write(typeof 3);

function my_number() {
    document.getElementById("number").innerHTML = isNaN('This is a string');
}

function my_false(){
    document.getElementById("false").innerHTML = isNaN('007');
}

function not_Function() {
    document.getElementById("not").innerHTML = !(20>10);
}

function not_false() {
    document.getElementById("maybe").innerHTML = !(5>10);
}

document.write(2E310); //positive infinity

document.write(-3E310); //-infinity

document.write(10 > 2); //true

document.write(10<2); //false

console.log(2+2); //displays math operation in dev tools console

document.write("10"+5); //type coercion

console.log(1>2); //false in console

document.write(10 == 10); //obtain true using double equals

document.write(3==11); //obtain false using double equals

x=10;
y=10;
document.write(x===y); //triple equals to check if comparison should be made

x=82;
y="82";
document.write(x===y); //wrong data types false

x="Bill";
y="Bill";
document.write(x===y); //even words work as long as they are same data type

x=19;
y="bob";
document.write(x===y); //different data type and value false

x=5;
y=8;
document.write(x===y); //same data type different values false

document.write(5>2 && 10>4); //&& operator both need to be either true or false

document.write(5>10 && 10>4); //returns false since both dont return true

document.write(5>10 || 10>4); //returns true since one is

document.write(5>10 || 10>20); //returns false since both are false
