//mainly used to declare non global variables
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