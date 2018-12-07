// Why TypeScript

// there are two main reasons
// 1) to provide optional type system in typescript :P
// 2) Provide planned features from future JavaScript editions to current JavaScript engines :)

// "Types have proven ability to enhance code quality and understandability"

//Teams working at big companies have reached to few conclusions
//1) Types increase your agility when doing refactoring.
//It's better for the compiler to catch errors than to have things fail at runtime.

//2) Types are one of the best forms of documentation you can have. The function signature
//is a theorem and the function body is the proof.



//"TypeScript is very particular about keeping the barrier to entry as low as possible. "

//"Your JavaScript is TypeScript"
//test -> tsc basics_2.ts && node basics_2.js
// see that basics_2.ts & basics_2.js match
var x = 1 //implicit type number which compiler decides
//x = "1"//uncomment this line and tslint will show error as typscript has registered x as number and not string 
var y = (function () {
  console.log(x)
}())

// types can be both implicit and expicit
// explicitillay giving types while declaring variable helps improve redability
// TypeScript uses postfix type annotations means 
// decalare varible like var foo: number = 123; (type comes after variable name)

var foo: number = '123'; // Error: cannot assign a `string` to a `number`

//Types are structural
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { /* do something */ }