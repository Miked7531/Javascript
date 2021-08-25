// function sum() {
// 	var total = 0;
// 	for (var i = 0; i < arguments.length; i++) { // arguments is not an array
// 		total += arguments[i];
// 	}
// 	return total;
// }

// //console.log(sum(1,2,3,4)) //returns 3 and removes 3 and 4
// //console.log(sum(1)) // returns NaN(not a number)
// sum(1,2,3,4)

// function login(method) {
// 	var options = arguments.slice(1); // [1,2,3,4].slice(1) // doesnt work since arguments is not an array
// 	console.log(method);
// 	console.log(options);
// }
// login("facebook", 1, 2, 3, 4);

// function login(method) {
// 	var options = Array.prototype.slice.call(arguments, 1); // alternative way to use arguments as an array.
// 	console.log(method);
// 	console.log(options);
// }

// login("facebook", 1 ,2 ,3 ,4);

function login(method, ...options) { // rest operator (...) the triple dot, in action. Nothing can exist after the rest operator, needs to be the last in a function parameter.
	console.log(method);
	console.log(options);
}
login("facebook", 1, 2 ,3 ,4);