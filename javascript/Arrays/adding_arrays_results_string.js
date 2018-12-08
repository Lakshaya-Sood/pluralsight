console.log([] + ['1']) // "1"
console.log([] + ['1','2']) //"1,2"
console.log(['9'] + ['1','2']) //"91,2"
console.log(['9','5'] + ['1','2']) //"9,51,2"


console.log({} + []) //0
console.log([] + {}) //"[object Object]"
console.log({} + {}) // NaN or [object Object][object Object]