"use strict";
// var theVal = 0;

// theVal = 1;

// if (theVal > 0) {
// 	console.log("Hello")
// }

// var let = 1; //won't work because keywork let is reserved for future versions of JavaScript

// var foo = 1; //cannot delete var in use strict mode or functions or arg to functions
// delete foo;

// function moo(arg) {
// 	delete arg;
// }

//var eval = 1; 

// var a = 2;
// eval("var a = 1"); // eval("")lets you evaluate JS expressions by passing in a string
// console.log(a); // without using strict mode in JS a var declared in eval will leak out and redeclare the same var later on.



for (i = 0; i < 1000; i++){
	for (x = 0; x < 100; x++){
		if (x == 10){
			break;
		}
	}
}
console.log(x);