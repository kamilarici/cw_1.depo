//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise");

const networkReq = new Promise((resolve, reject) => {
  const data = { a: 1, b: 2 };
  const success = Math.floor(Math.random() * 5); //? (0,1,2,3,4)
  if (success) {
    console.log("Data fetched");
    resolve(data);
  } else {
    reject("Ohh no there is network error");
  }
});

networkReq
  .then((response) => console.log(response))
  .then(() => console.log("2. then"))
  .catch((err) => document.write(err))
  .finally(() => console.log("Her zaman calisir"));

//? Alternatif olarak hatayı handle etmek icin try-catch blogu da kullanılabilir.

// try {
//   networkReq
//     .then((response) => console.log(response))
//     .then(() => console.log("2. then"))
// } catch (err) {
//   document.write(err)
// } finally {
//   console.log("Her zaman calisir")
// }

// console.log(networkReq)

// console.log("Hello.");
// setTimeout(function () {
//   console.log("Goodbye!");
// }, 2000);
// console.log("Hello again!");
// program to display a text using setTimeout method
// function hello() {
//   console.log("Hello world");
// }
// let intervalId = setTimeout(hello, 3000);
// console.log("This message is shown first");
// console.log("Id: " + intervalId);
// // program to display time every 5 seconds
// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }
// let display = setInterval(showTime, 5000);

// program to display time every 3 seconds
// ?sonsuz
// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
//   setTimeout(showTime, 3000);
// }
// showTime();

// setTimeout()  clearTimeout()
// setInterval() clearInterval()
// let count = 0;
// let interval = setInterval(
//   function (firstName, lastName) {
//     count += 1;
//     if (count === 5) {
//       clearInterval(interval);
//     }
//     console.log("Hello" + " " + firstName + " " + lastName);
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
//   },
//   2000,
//   "kadir",
//   "kumru"
// );
