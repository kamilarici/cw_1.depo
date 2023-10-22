const person1 = {
    name: "kamil"
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
const cohort14 = new LSMCalender(['HTML', 'JS']);
cohort14.addEvents('react');
console.log(cohort14);
