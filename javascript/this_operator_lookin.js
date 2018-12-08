//Any access to "this" keyword within a function is actually controlled by how the function is actually called.
//It is commonly referred to as the “calling context.”

function foo() {
  console.log(this);
}

foo(); // logs out the global e.g. `window` in browsers
let bar = {
  foo
}
bar.foo(); // Logs out `bar` as `foo` was called on `bar`