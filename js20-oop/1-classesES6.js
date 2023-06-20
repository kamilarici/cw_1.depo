//* ==============================================
//*      OOP - Classes and Inheritance (ES6)
//* ===============================================
//! Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//! Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//! Cozum: Object Oriented Programming (ES5 and ES6)

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "The Karamazov Brothers",
  author: "Dostoevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());

const book2 = {
  title: "The Karamazov Brothers",
  author: "Dostoevski",
  year: 1886,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book2.getSummary());

//? Classes'lar, object (nesne) olusturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)
console.log("****classes****");

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
