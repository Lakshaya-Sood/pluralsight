// What is the diffence between type and interface

// Interfaces can be extended (adding properties to difference interface)

interface A {
  x: number;
}
interface B extends A {
  y: string;
}

//and also augmented  (adding properties later to the same interface)

interface C {
  m: boolean;
}
// ... later ...
interface C {
  n: number;
}

var checki: C = { m: true, n: 1 }
var heku: B = {x: 1, y: ''}

//Type aliases, however, can represent some things interfaces can't
type NumOrStr = number | string;
type BoolOrStr = boolean | string;
type NeatAndCool = NumOrStr & BoolOrStr;

let gotye: NeatAndCool = '1'; // true
//let gotye: NeatAndCool = 123; //error
//let gotye: NeatAndCool = true; // error

type JustSomeOtherName = NeatAndCool;

//https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md