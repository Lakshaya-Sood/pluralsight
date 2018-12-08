//=======================================================================================================

//ACCESS MODIFIERS
class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

// EFFECT ON INSTANCES
var foobase = new FooBase();
foobase.x; // okay
//foobase.y; // ERROR : private
//foobase.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
  constructor() {
    super();
      this.x; // okay
      //this.y; // ERROR: private
      this.z; // okay
  }
}