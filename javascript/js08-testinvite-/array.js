// {
//   var a = "Hello World!";
//   console.log(a);
// }

// console.log(a);
var a = 100;
var b = 5;

function one() {
  // this `a` only belongs to the `one()` function
  var a = 1; // the a in the outer scope is shadowed and hence cannot be reached through scope but onl through the global object (which is a bad smell)
  var c = 6;
  console.log(a);
  console.log(b);
}

function two() {
  // this `a` only belongs to the `two()` function
  var a = 2;
  console.log(a);
}

one();
two();
