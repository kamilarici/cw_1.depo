console.log("oop");

const book1 = {
  title: "harry potter",
  author: "tostoy",
  year: 1186,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book1.getSummary());

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

const book3 = new Book("hakim", "orhan veli", 1987);
const book4 = new Book("elma", "xyz", 1990);
console.log(book3);
console.log(book3.getSummary());
console.log(book4.getSummary());
//? *****inheitence

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year, month);
    this.month = month;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} in ${this.month}`;
  }
}
const mag1 = new Magazine("elle", "mcelle", 2023, "june");
console.log(mag1);
console.log(mag1.getSummary());
