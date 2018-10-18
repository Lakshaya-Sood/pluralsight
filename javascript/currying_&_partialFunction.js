//below code uses CLOSURE property of JAVASCRIPT
//----------------------------------------------
//currying example - no of parameters is equal to number of functions in chaining
function add(x){
	return function(y){
		return function(z){
			return x+y+z;
		}
	}
}
var sum = add(1)(2)(3);
console.log('Sum of 1 + 2 + 3 = ',sum);

//partial function example
function multiply(a){
	return function(b,c){
		return a*b*c;
	}
}
var mul = multiply(2)(3,4);
console.log('Result of 2 * 3 * 4 = ',mul);

// difference between currying and partial function is that 
// CURRYING is done with 2 or more than 2 parameters
// while
// PARTIAL FUNCTION is created only with 2 parameters 


//both partial function as well currying and their REAL USAGE example
function calculateDiscountPrice( discount ){
	return function fixedDiscountOn( price ){
		return discount * price
	}
}
var tenPercentDiscount = calculateDiscountPrice(0.1),
	thirtyPercentDiscount = calculateDiscountPrice(0.3);
	
var finalDiscountOn100after10 = tenPercentDiscount(100),
	finalDiscountOn100after30 = thirtyPercentDiscount(100);
	
console.log('finalDiscountOn100after10',finalDiscountOn100after10);
console.log('finalDiscountOn100after30',finalDiscountOn100after30);
