console.log("oop");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  setPrice(price) {
    const taxRate = 1.1;
    this.price = Math.trunc(price * taxRate);
  }
}

const book1 = new Book("hakim", "orhan veli", 1987);
const book2 = new Book("elma", "xyz", 1990);

//? *****inheitence
//! sub class tanınması **inheritance**
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year, month);
    this.month = month;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} in ${this.month}`; //?sadece içi değişiyor ise OVERRİDİNG
  }

  //? OVERLODİNG parametreler değişiyor parent eziliyor
  setPrice(price, taxRate = 1.2) {
    this.price = price * taxRate;
  }
  getSummaryParrent() {
    return super.getSummary();
  }
}
const mag1 = new Magazine("elle", "mcelle", 2023, "june");
book1.setPrice(100);
console.log(book1);
mag1.setPrice(50, 1.5);
console.log(mag1);

console.log(mag1.getSummary()); //?averriding gelen
console.log(mag1.getSummaryParrent()); //?parrenttan gelen
