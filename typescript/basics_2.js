// Why TypeScript
// there are two main reasons
// 1) to provide optional type system in typescript :P
// 2) Provide planned features from future JavaScript editions to current JavaScript engines :)
// "Types have proven ability to enhance code quality and understandability"
//Teams working at big companies have reached to few conclusions
//1) Types increase your agility when doing refactoring.
//It's better for the compiler to catch errors than to have things fail at runtime.
//2) Types are one of the best forms of documentation you can have. The function signature
//is a theorem and the function body is the proof.
var x = 1;
var y = (function () {
    console.log(x);
}());
