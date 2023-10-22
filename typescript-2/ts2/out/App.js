const person1 = {
    name: "kamil",
};
class LSMCalender {
    constructor(events) {
        this.events = events;
        this.events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const cohort14 = new LSMCalender(["HTML", "JS"]);
cohort14.addEvents("react");
console.log(cohort14);
const point1 = { x: 50, y: 30 };
const point2 = { x: 50, y: 30 };
function add(n1, n2) {
    return n1 + n2;
}
function conC(n1, n2) {
    return n1 + n2;
}
let arithmeticAdd = add;
console.log(arithmeticAdd(2, 8)); //10 verir hata yok
// arithmeticAdd=conC //hata verir çünkü type lar eşitleyemez
//! GENERİCS
// build in generic
const names = [];
const names2 = ["hello", "world"];
const names3 = [1, 2, 3];
const myData = { data: 35 };
const myData2 = { data: '35' };
const myData3 = { data: false };
