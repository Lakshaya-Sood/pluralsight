//TIP #2 -> So be mindful of your usage of "this"

//Any access to this keyword within a function is actually controlled by how the function is actually called.
//It is commonly referred to as the “calling context.”

//Here is an example:
function foo6() {
  console.log(this);
}

foo6(); // logs out the global e.g. `window` in browsers
let bar = {
  foo6
}
bar.foo6(); // Logs out `bar` as `foo` was called on `bar`


//If you want to disconnect this in a class from the calling context use an arrow function ???? kya