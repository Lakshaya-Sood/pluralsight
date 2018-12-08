// Abstract

//1) abstract classes cannot be directly instantiated. Instead the user must create some class 
//that inherits from the abstract class.
//2) abstract members cannot be directly accessed and a child class must provide the functionality.


//Constructor is optional
class Rover {}
var myRover = new Rover();

//shorthand constructor + access modefiers
class Eil {
  constructor(public x:number) {
  }
}