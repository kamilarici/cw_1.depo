//* =====================================
//*      OOP -  Polymorphism(ES6)
//*=====================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

console.log("polymorphisim");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} waswritten by ${this.author} in ${this.year}`;
  }
}
//! Book kalibinda yeni bir ornek (instance) olusturduk.
const book3 = new Book("stupid reseachers", "xyz", 2022);
const book4 = new Book("dummy reseachers", "abc", 2022);
const book5 = new Book("yeni ad", "mmö", 2020);

console.log(book3);

console.log(book3.getSummary());
console.log(book4.getSummary());

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("elle", "allen mcalle", 2023, "june");

console.log(mag1);
console.log(mag1.getSummary());
