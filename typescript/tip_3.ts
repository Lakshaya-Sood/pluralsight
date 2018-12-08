//TIP #3 -> javascripts calculations can be very unsafe... specially the decimal ones
console.log(.1 + .2); // 0.30000000000000004
// better use a library that is designed only for perfect decimal math & big calculations
//npm install big.js @types/big.js


//TIP #3.1 -> Note: Equality checks don't work on NaN values. Use Number.isNaN instead:

// Don't do this
console.log(NaN === NaN); // false!!

// Do this
console.log(Number.isNaN(NaN)); // true

//TIP #3.2 ->  You can easily convert values to a true boolean by prefixing it with !!
var tower = 'khalifa'
var boolean_tower = !!tower

//----------------------------------------------------------------------====================================
//MUST READ
// best js numbers explained -> https://basarat.gitbooks.io/typescript/docs/javascript/number.html
//======================================================================------------------------------------