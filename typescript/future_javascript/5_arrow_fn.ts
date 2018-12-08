// arrow function also called fat arrow(->thin and =>fat) or lamda function(because of other languages)
//Why arrow function
// --You don't need to keep typing function
// --It lexically captures the meaning of this
// --It lexically captures the meaning of arguments


function Person(age) {
  this.age = age;
  this.growOldarrow = () => { // arrow keeps the refrencne of this inside it 
      this.age++;
  }
  this.growOldfunction = function() { // function does not keep it
      this.age++;
  }
}
var person = new Person(1);
setTimeout(person.growOldfunction,1000);

setTimeout(function () { console.log(person.age); }, 1000); // still 1

setTimeout(person.growOldarrow, 1000);

setTimeout(function () { console.log(person.age); }, 3000); //2

//1) if you want this to be the calling context you should not use the arrow function.
// if callback parameter of some library requires a fuction that overwrites this then
// using arrow is danger

//2) Arrow functions as properties on classes work fine with inheritance.
//However, they do not work with the super keyword when you try to override
//the function in a child class.Properties go on this.
class Adder {
  constructor(public a: number) {}
  // This function is now safe to pass around
  add = (b: number): number => {
      return this.a + b;
  }
}

class ExtendedAdder extends Adder {
  // Create a copy of parent before creating our own
  private superAdd = this.add;
  // Now create our override
  add = (b: number): number => {

      //-------return super.add(b); //ERRORORORORORO
    
      return this.superAdd(b);
  }
}

//3) Sometimes you need a function that just returns a simple object literal. However, something like
// WRONG WAY TO DO IT
var wrongWay = () => {
  bar: 123
};
// Correct 🌹
var rightWay = () => ({
  bar: 123
});