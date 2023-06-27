console.log("destr.");

const user = {
  name: "mehmet",
  age: 25,
  isTest: false,
  skills: ["html", "css"],
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
const { name, age, ...rest } = user;
console.log(rest);
