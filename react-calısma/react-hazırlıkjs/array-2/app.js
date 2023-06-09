console.log("array met.");
//? for-forEach **************

/* console.log("merhaba");
const users = [
  { id: 0, name: "mehmet", age: 25 },
  { id: 1, name: "ahmet", age: 45 },
  { id: 2, name: "kml", age: 33 },
];

const kirktanKucukler = [];
//?******
users.forEach((user) => {
  if (user.age < 40) {
    kirktanKucukler.push(user.age);
  } else {
    console.log(user);
  }
}); */
//*********** */
/* for (let i = 0; i < users.length; i++) {
  console.log(users);
  if (users[i].age < 40) {
    kirktanKucukler.push(users[i].name);
  } else {
    console.log(users[i]);
  }
} */
// console.log(kirktanKucukler);
// //******** */
const data = [
  {
    id: 1,
    name: "HTML",
    age: "49",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU",
  },
  {
    id: 2,
    name: "CSS",
    age: "42",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    age: "31",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 4,
    name: "REACT",
    age: "28",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 5,
    name: "BOOTSTRAP",
    hour: "16:15 pm",
    age: "25",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
  },
  {
    id: 6,
    name: "MUI",
    hour: "16:15 pm",
    age: "15",

    image: "https://mui.com/static/logo.png",
  },
];

const div = document.querySelector("#id");

// const images = [];
// data.forEach((datas) => {
//   const { id, name, hour, image } = datas;
//   div.innerHTML += `

//   <div>
//   <p>id:${id}</p>
//   <p>name:${name}</p>
//   <p>hour:${hour}</p>
// </div>
// <div>
//   <img width="50px" src="${image}" alt="">
// </div>

//   `;
// });

// console.log(images);
//? forEach end**************

//! map methot *******
// //**map metodu dizi içerisinde döner ve bir değer döndürür,dönen değeri yakalamak için return yapmamız gerekiyor.map aynı sayıda bir dizi döndürür  */
// const hour = data.map((datas) => {
//   console.log(datas);
//   console.log(datas.name);
//   if (datas.age < 30) {
//     console.log(datas.name);
//     return datas;
//   } else {
//     return "30 dan büyük";
//   }
//   return datas.age + 100;//?bu şekilde yeni koşullar ile de döndürülebilir
// });

// console.log(hour);
//! filter *******
//**tüm arrayi dönmek yerine bizim istediğimiz şartları sağlayanları döndürmasini istediğimizde kullanırız  */

// const kirk = data.filter((datas) => {
//   if (datas.age < 40) {
//     return datas;

//   }

//   if (datas.age < 40) {
// return datas.image;

//     return (div.innerHTML += `<img width="50px" src="${datas.image}" alt="">
//         `);
//   }

//   if (datas.age < 40) {
//     if (datas.name != "MUI") {
//       console.log("muı hariç kardeş");
//       const kml = datas.age * 3;
//       console.log(kml);
//     } else {
//       console.log("muı hariç 40 dan kücükler");
//       return datas.name;
//     }
//   }
// });
// console.log(kirk);

//! find methot ******

//* koşulu sağlayan ilk değeri döndürür diğerlerine bakmaz.döndürdüğü değeri de array içinde değil diren kendisini getirir
// const finder = data.find((datas) => {
//   if (datas.age === "25") {
//     return datas;
//   }
// });
// console.log(finder);

//! iyileştirmeler

// const findAges = (datas) => {
//   if (datas.age === "25") {
//     return datas
//   }
// };
//* 2. iyileştirme .tek satırlık işlemlerde arrow f. return var gibi çalışır
// const findAges = (datas) => datas.age === "25";

//*find ile dolaşmak yerine içine bir funtion tanınlıyoruz ve bu fonksiyonla dışarıda yapıyoruz işlemleri daha temiz kod oluyor
// const finder = data.find(findAges);
// console.log(finder);

//?REDUCE() METHODU

const urunler = [
  { id: 1, name: "kalem", fiyat: 5 },
  { id: 2, name: "defter", fiyat: 10 },
  { id: 3, name: "silgi", fiyat: 2 },
  { id: 4, name: "kalemtraş", fiyat: 7 },
];
//*reduce ürünlri gezerken değerlerini tutar ve oplamamızı sağlar .başlangıç teğeri atayabiliriz
const urunToplamFiyati = urunler.reduce(
  (toplam, urun) => toplam + urun.fiyat,
  0
);
console.log({ urunToplamFiyati }); //{urunToplamFiyati: 24}

const toplamString = urunler.reduce(
  (toplam, urun) => (toplam = toplam + " " + urun.name),
  "urun isimlari:"
);
console.log(toplamString);
// const toplamDizi = urunler.reduce(
//   (toplam, urun) => (toplam = [...toplam, urun.name]),
//   []
// );
//? reduce yerine map ile daha kısa şekilde halledilebilir
const toplamDizi = urunler.map((urun) => urun.name);
console.log(toplamDizi);
