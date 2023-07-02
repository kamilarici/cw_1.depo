// function selamLaLiteralString(name) {
//   //*stringleri birleştirme
//   return `hey, ${name}`;
// }
// console.log(selamLaLiteralString("mehmet"));

const user = {
  name: "mehmet",
  surname: "pekcan",
};
//?condinatial expreesion
function selamlaConditional(person) {
  //* condition?truty:falsy
  const name = person ? person.name : "yabanci";
  return `hey, ${name}`;
}

// console.log(selamlaConditional());
//? || or
function selamlaLogicalOR(person) {
  const name = person.name || "yabanci";
  return `hey,${name}`;
}
// console.log(selamlaLogicalOR(user));

//? AND
function selamlaLogicalAnd(person) {
  const name = (person && person.name) || "yabanci";
  return `hey,${name}`;
}

// console.log(selamlaLogicalAnd(null));

//? optional changing

//person var mı .varsa name i döndür yoksa yabancı yazdır
function selamlaOptionalChanging(person) {
  const name = person?.name || "yabanci";
  return `hey,${name}`;
}

// console.log(selamlaOptionalChanging(user));

function selamlaNullishCoalescing(person) {
  // person name varsa yazdır yoksa yabancı
  //or false durumunda yabancıyı yazdırır ama ?? bu name de herhangibirşey olması yeterli name :0 name false  vb gibi ama or nme :0 da yabancıya atlar
  const name = person.name ?? "yabanci";
  return `hey,${name}`;
}
console.log(selamlaNullishCoalescing(user));
