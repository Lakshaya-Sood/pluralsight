// TIP #5 -> Using spread operator is a great way to go
function boo(x, y, z) { console.log(x, y, z); }
var args123 = [0, 1, 2];
boo.apply(void 0, args123);
