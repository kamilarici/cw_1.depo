// {
//   var a = "Hello World!";
//   console.log(a);
// }

// console.log(a);
// var a = 100;
// var b = 5;

// function one() {
//   // this `a` only belongs to the `one()` function
//   var a = 1; // the a in the outer scope is shadowed and hence cannot be reached through scope but onl through the global object (which is a bad smell)
//   var c = 6;
//   console.log(a);
//   console.log(b);
// }

// function two() {
//   // this `a` only belongs to the `two()` function
//   var a = 2;
//   console.log(a);
// }

// one();
// two();
// var arr = [];
// for (var i = 0; i < 5; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }
// //console.log(arr);
// console.log(arr[0]());

// for (var c = 0; c < 5; c++) {
//   console.log(arr[c].toString());
// }

// function hi() {
//   var result;

//   {
//     let repeat = "#";

//     for (let i = 0; i < 5; i++) {
//       result += repeat;
//     }
//   }

//   return result;
// }

// Use var/let depending your intention. Don't missuse them, even though the code will work either way

// let keyword cannot be repeated
// let a = 0;
//let a = 0; //-> SyntaxError: Identifier 'a' has already been declared

// console.log(typeof "Mustafa");
// console.log(typeof String("Mustafa"));
// console.log(typeof Number(100));

// console.log(String("Mustafa") == String("Mustafa"));
// console.log(Number(100) == Number(100));
// console.log(Boolean(true) == Boolean(true));

// console.log(new Object() == new Object());

// console.log(typeof new String("Mustafa"));

// function go() {
//   console.log(arguments);
// }

// var arr = ["mustafa", "ekim"];
// go(arr.map((a) => "***" + a));
// function Y() {}

// var foo = new Y();

// console.log(foo.__proto__ == Y.prototype); // true

function user(name) {
  this.name = name;
}

user.prototype.greet = function () {
  return "hello, " + this.name;
};

var mustafa = new user("Mustafa");
console.log(mustafa);

var cengiz = new user("Cengiz");

console.log(cengiz.greet());

var hep = "25";
console.log(hep);
