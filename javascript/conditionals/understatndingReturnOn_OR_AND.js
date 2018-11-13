var x 
x = 1 || 2
console.log("1 || 2 = ", x)
x = 1 && 2
console.log("1 && 2 = ", x)
x = 0 || 0
console.log("0 || 0 = ", x)
x = 0 || 2
console.log("0 || 2 = ", x)
x = 0 && 2
console.log("0 && 2 = ", x)

//OR -> always returns the first true value or the last false value
//AND -> always returns the last true value or the first false value