// !javascript kodu

// console.log("lokalde bulunan js çalıştı");
// alert("bu bir alerttir");

// confirm("emin misiniz e/h");
// console.log("alertten sonraki komut");
// console.warn("bu bir uyarıdır");

//? **********const********
const pi = 3.14;
console.log(typeof pi);
const sayı1 = "3";
console.log(typeof sayı1);

// const deneme;  // const değerinin  atanması gerekiyır başlangıç değeri verilmelidir
// console.log(deneme);
//! caught SyntaxError: Missing initializer in const declaration (at app.js:16:7)

// const number1 = 5;
// number1 = 7;
// !p.js:21 Uncaught TypeError: Assignment to constant variable. cons değişkenine sonradan atama yapılamaz

const varMı = true;
const isOpen = false;
console.log(isOpen, typeof isOpen);

//?**************let ************

let language = "java";
console.log(language, typeof language);

language = "javascript";
console.log(language);
language = "true";
console.log(language, typeof language);

let adet;
console.log(adet); //? underfined let de atama yapılmadıysa değişken türü underfined olur

adet = "23";
console.log(adet, typeof adet);

{
  // bir blok içinde değişken oluşturduk
  let localDeğişken = 5;
  localDeğişken = localDeğişken + 1;
  console.log(localDeğişken);
}
console.log(localDeğişken);
// !p.js:49 Uncaught ReferenceError: localDeğişken is not defined
