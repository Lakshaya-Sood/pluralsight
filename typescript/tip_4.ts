//TIP #4 -> let is extremely useful to have for the vast majority of code.
//It can greatly enhance your code readability and decrease the chance of a programming error.\

//TIP -> applying type while destructing props
const point3 = {x: 1, y: 2, z: 3};
/** A nifty use of rest to remove extra properties */
const { z, ...point2 } = point3;

//ARRAY DESTRUCTING
var r = 1, s = 2;
[r, s] = [s, r];
console.log(r, s); // 2,1

var [t, u, ...remaining] = [1, 2, 3, 4];
console.log(t, u, remaining); // 1, 2, [3,4]

var [w, , ...remaining] = [1, 2, 3, 4];
console.log(w, remaining); // 1, [3,4]

//TIP -> Destructuring can make your code more readable and maintainable by reducing the line count and 
//making the intent clear.Array destructuring can allow you to use arrays as though they were tuples.

