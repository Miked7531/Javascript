// var ar1 = [4, 5, 6];
// var ar2 = [...ar1];
// ar1[0] = -1;
// console.log(ar1)
// console.log(ar2)	//use spread operator(...) to put an array or part of an array into another, useful for copying.

var meth = "twitter";
var opts = ["key", "callbackUrl"];

function login(method, ...options){  //spread operator is good when you want to manipulate an array or multiple arrays.
	console.log(method);
	console.log(options);
}

login(meth, ...opts);