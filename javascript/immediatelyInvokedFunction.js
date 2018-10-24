//https://blog.mariusschulz.com/2016/01/13/disassembling-javascripts-iife-syntax
//mainly used to declare non global variables
//IIFEs can be used to wrap state (or data in general) that's meant to be private
//in plain JS
(function(){
	var num = '123'
	console.log(num)
})()

//in ECMA - using curly braces
{
	"use strict";
	let i = 10;
	console.log(i);
}
//---------------------

//closure + IIF
const currentCounterValue = (function() {
    let count = 0;
    return function() {
        ++count;
        return `You called it ${count} times`;
    };
})();

console.log(currentCounterValue()); 
console.log(currentCounterValue());
console.log(currentCounterValue());

//passing global variable inside function
//(function(){}()) --- more better at readability
//(function(){})()  --- less better at readability

//on browser
//(function(a,b){
//	a is window and b is document
//})(window,document)

//In node
global.x = '123'; 
(function(global){
	console.log(global)
})(this)