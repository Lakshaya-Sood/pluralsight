//=======================================================================================================

//STATIC properties
class Something {
  static instances = 0;
  constructor() {
      Something.instances++;
  }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2
//console.log(s1.instances); // error
//console.log(s1.instances); // error