//Q1
//"use strict";
// var a = 1;
// var b = {};
// function foo(x, y) {
// 	x = 2;
// y.moo = 3;
// }

// foo(a,b);
// console.log("a = " + a + "; b= " + JSON.stringify(b));

//Q2, in non-strict mode we can use any variable even if it hasn't been defined with var
// var asimsVar = 3;
// asimVar = 1;
// console.log(asimVar);

//Q3, in strict mode we can't use variables that have not been declared with var first, check the code closely you will see that "asimVar" is spelt differently to "asimsVar"
// "use strict";
// var asimsVar = 3;
// asimVar = 1;
// console.log(asimVar);

//Q4, Task group responsible for defining the JavaScript standard is the TC39;