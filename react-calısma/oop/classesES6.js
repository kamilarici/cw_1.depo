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
console.log(book3);
