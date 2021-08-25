// var msg = "hello\nworld\nmy\nname\nis\nbob"; // using \n for putting material on new line
// console.log(msg);

// var msg = ` 
// hello 
// world's 
// my 
// name
// is 
// "bob"`;
// console.log(msg); // ` backtick is used here to take care of multiple escape \ uses.

var name = "bob";
var place = "world";
var msg = `hello
${place}
my
name
is 
${name}`; // {} will take multiple expressions inside of it for example {2+2} instead of a string
console.log(msg);

var name = "bob";
var place = "world";
var msg = `hello
${1+1}
my
name
is 
${2+69}`; // {} will take multiple expressions inside of it for example {2+2} instead of a string
console.log(msg);

var isBold = false;
var msg = `hello world my name is ${isBold ? "<b>bob</b>" : "bob"}`;
console.log(msg)