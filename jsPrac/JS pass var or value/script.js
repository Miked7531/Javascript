"use strict";

// JavaScript passes primitive types by value and objects by reference


//below is passing by value
// var a = 1;
// function foo(a){
// 	a = 2;
// }
// foo(a);
// console.log(a);

// passing a value in Javascript also works with different primitive types
// below passing boolean instead of int
// var a = true;
// function foo(a){
// 	a = false;
// }
// foo(a);
// console.log(a);

//below is passing by reference
//passing by reference is passing something that points to something else, change will be reflected in the outer scope
// var a = {};
// function foo(a){
// 	a.moo = false;
// }
// foo(a);
// console.log(a);

// can only add or change the property of a, but not change what it points to, hence reference.
var a = {'moo': 'too'};
function foo(a){
	a.moo = {'moo' : 'too'};
}
foo(a);
console.log(a);