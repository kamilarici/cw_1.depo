//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500];

//* KLASIK FOR
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
console.log("*********");

//* FOREACH
prices.forEach((p) => console.log(p));

console.log("*********");
prices.forEach((p, i) => console.log("DEGER:", p, "INDIS:", i));

//?-------------- ÖRNEK -------------------
//?  Dizideki toplam fiyati hesaplayalim.
let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);

console.log("*********");
//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => price * 2));

//* Foreach ile dongu icerisinde herhangi bir item okunabilir, listelenbilir veya yazdirilabilir. Ancak bu degeri dondurmek mümkün değildir.
prices.forEach((price) => console.log(price * 2));

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperName = names.map((name) => name.toLocaleUpperCase());
console.log(upperName);
console.log(names);

//! Orjinal dizi yi modifiye etmek için 3. parametre kullanilabilir.
names.map((name, i, arr) => {
  arr[i] = name.toLocaleUpperCase();
});

console.log(names);

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 21.78;
const dolar = 19.8;
const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));

console.log(dolarPrices);
console.log(euroPrices);
console.log(tlPrices);

//* =======================================
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const biggerThan = salaries.filter((salary) => salary >= 10000);
console.log(biggerThan);
console.log(salaries);

const range = salaries.filter((salary) => salary >= 8000 && salary <= 10000);
console.log(range);
//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const biggerThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)));

console.log(biggerThan9000);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s)); //? Consuming

//* =======================================
//*             REDUCE METHOD
//* =======================================

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.
const sayı1 = [1, 3, 56, 25, 24, 28, 88];
console.log(sayı1.every((s) => s <= 80)); //! false ***&& gibi**

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.
const sayı2 = ["bmw", "audi", "mercedes", "ford"];
console.log(sayı2.some((x) => x === "audi")); //! true || gibi****

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.
//!yeni değere atanabilir (döndürdüğü değeri)
const sayı3 = [25, 24, 8, 56, 84, 12];

const yeni3 = sayı3.find((x) => x < 15);
const yeni4 = sayı3.findLast((x) => x < 15);

console.log(yeni3);
console.log(yeni4);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

const sayı5 = [2, 9, 15, 17, 10, 25, 59];

const sayı6 = sayı5.findIndex((x) => x > 25);
console.log(sayı6); //! 6 indexi dönüyor atama yapılabilir
