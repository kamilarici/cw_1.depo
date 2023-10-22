interface Person {
  name: string;
}

const person1: Person = {
  name: "kamil",
};

interface Calender {
  events: string[];
  addEvents(event: string): void;
}
class LSMCalender implements Calender {
  constructor(public events: string[]) {
    this.events;
  }
  addEvents(event: string): void {
    this.events.push(event);
  }
}

const cohort14 = new LSMCalender(["HTML", "JS"]);

cohort14.addEvents("react");
console.log(cohort14);

interface Point {
  x: number;
}

interface Point {
  y: number;
}
const point1: Point = { x: 50, y: 30 };

type Pointx = { x: number };
type Pointy = { y: number };
type PointI = Pointx & Pointy;

const point2: PointI = { x: 50, y: 30 };

// fonksiyon imzası
interface Sum {
  (num1: number, num2: number): number;
}
function add(n1: number, n2: number): number {
  return n1 + n2;
}
function conC(n1: string, n2: string): string {
  return n1 + n2;
}

let arithmeticAdd: Sum = add;
console.log(arithmeticAdd(2, 8)); //10 verir hata yok

// arithmeticAdd=conC //hata verir çünkü type lar eşitleyemez

//! GENERİCS

// build in generic

const names: string[] = [];
const names2: Array<string> = ["hello", "world"];
const names3: Array<number> = [1, 2, 3];


// problem
interface Result<T>{
    data:T | null
}

const myData:Result<number>={data:35}
const myData2:Result<string>={data:'35'}
const myData3:Result<boolean>={data:false}