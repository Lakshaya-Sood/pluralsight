//--------------------- NuLL & Undefined ---------
//1) Something hasn't been initialized : undefined.
//2) Something is currently unavailable: null.
/// Imagine you are doing `foo.bar == undefined` where bar can be one of:
console.log(undefined == undefined); // true
console.log(null == undefined); // true
// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

// recommended to use == null or != null for checking both null or undefined
function foo1(arg: string | null | undefined) {
  if (arg != null) {
    // arg must be a string as `!=` rules out both null and undefined. 
  }
}


// checking var before using it
var someglobal;
if (typeof someglobal !== 'undefined') {
  // someglobal is now safe to use
  console.log(someglobal);
}


//optional parameter while saying type defination ;)
function foo2(x: number, y?: number): { a: number, b?: number } {
  if (typeof y != 'undefined') {
    return { a: x, b: y };
  } else {
    return {a:x};
  }
}

