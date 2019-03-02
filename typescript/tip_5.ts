// TIP #5 -> Using spread operator is a great way to go
function boo(x, y, z) {console.log(x,y,z) }
var args123 = [0, 1, 2];
//boo(...args123); // works in es6 but not in typescript ??

var xio = [4,5,6]
args123.push(...xio) // Adds arr2 items to end of array
args123.unshift(...xio) //Adds arr2 items to beginning of array

let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1