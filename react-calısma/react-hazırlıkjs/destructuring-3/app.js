console.log("destr.");

const user = {
  name: "mehmet",
  age: 25,
  isTest: false,
  skills: ["html", "css"],
  school: {
    name: "asd",
    sinif: 3,
  },
};
//*uzun yol
// const name = user.name;
// const age = user.age;

//*destr.kısa yol
// const { name } = user;
// const { age } = user;
// const { name, age, isTest, skills } = user;
// console.log(name, age, isTest, skills);
//? buradaki rest değişken herhangi birşey olabilir .ahmet mehmet herşey olabilir .önündeki üç nokta  spread operatörüdür ve arrayin içindekileri dışarı çıkarır ekler.
// const { name, age, ...rest } = user;
// console.log(rest); //{isTest: false, skills: Array(2)}

// const { school } = user;
// console.log(school);//{name: 'asd', sinif: 3}

//! iç içe seviyede destr.yöntemi ..içine girildiğinde objenin kendini çağıramazsınız sadece girdiğiniz yerdeki değeri çağırabilirsiniz
// const {
//   school: { sinif, name },
// } = user;
// console.log(sinif, name); //3 'asd'

//? ARRAY DESTR.
// const skills = ["html", "css", "js", "java", "sql", "c++", "c#"];

// const firstSkills = skills[0];
// const secondSkills = skills[1];
// console.log(firstSkills, secondSkills); //html css

// const [x, y, z, t, ...rest] = skills;
// console.log(x, y, z, t); //html css js java
// //?rest array şeklinde döner
// console.log(rest); //['sql', 'c++', 'c#']

//?SPREAD OPERATOR
//...
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];
// //* arrayleri birleştirmek
// const newArray = [...array1, ...array2];
// //*arrayleri clonlamak
// const yeniArray = [...array1];
// console.log(yeniArray);
// console.log(newArray);
// //*stringi array haline dönüştürmek
// const ahmet = [..."ahmet"];
// console.log(ahmet); //['a', 'h', 'm', 'e', 't']

// //
// function test(name, surname, ...rest) {
//   console.log(name, surname, rest);
// }

// test(1, 61, 2, 8, 22, 78);
