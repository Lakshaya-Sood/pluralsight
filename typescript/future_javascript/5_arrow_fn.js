// arrow function also called fat arrow(->thin and =>fat) or lamda function(because of other languages)
//Why arrow function
// --You don't need to keep typing function
// --It lexically captures the meaning of this
// --It lexically captures the meaning of arguments
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Person(age) {
    var _this = this;
    this.age = age;
    this.growOldarrow = function () {
        _this.age++;
    };
    this.growOldfunction = function () {
        this.age++;
    };
}
var person = new Person(1);
setTimeout(person.growOldfunction, 1000);
setTimeout(function () { console.log(person.age); }, 1000); // still 1
setTimeout(person.growOldarrow, 1000);
setTimeout(function () { console.log(person.age); }, 3000); //2
//1) if you want this to be the calling context you should not use the arrow function.
// if callback parameter of some library requires a fuction that overwrites this then
// using arrow is danger
//2) Arrow functions as properties on classes work fine with inheritance.
//However, they do not work with the super keyword when you try to override
//the function in a child class.Properties go on this.
var Adder = /** @class */ (function () {
    function Adder(a) {
        var _this = this;
        this.a = a;
        // This function is now safe to pass around
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var ExtendedAdder = /** @class */ (function (_super) {
    __extends(ExtendedAdder, _super);
    function ExtendedAdder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Create a copy of parent before creating our own
        _this.superAdd = _this.add;
        // Now create our override
        _this.add = function (b) {
            //-------return super.add(b); //ERRORORORORORO
            return _this.superAdd(b);
        };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
//3) Sometimes you need a function that just returns a simple object literal. However, something like
// WRONG WAY TO DO IT
var wrongWay = function () {
    bar: 123;
};
// Correct 🌹
var rightWay = function () { return ({
    bar: 123
}); };
