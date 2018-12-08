// in javascript we can make use of == and === to do wrong stuff as of type is concerned
// like compairing string with number [0 == '']// true

// Typescript catched these at compile time
console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error
console.log("" == "0"); // false
console.log(0 == ""); // true
console.log("" === "0"); // false
console.log(0 === ""); // false


//Structural Equality
// use "deep-equal" npm package for checking deep equality
// npm i deep-equal
type one = {
  x: string,
  y: string
}
type two = {
  s: string,
  t: string
}
var m: one = {x:'1',y:'2'}
var n: two = { s: '1', t: '2' }
// error m == n at compile time of having no overlap
if (m === n) { /*dasd*/}