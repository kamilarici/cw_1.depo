interface Person{
    name:string;
}

const person1:Person={
    name:"kamil"
}

interface Calender{
    events:string[];
    addEvents(event:string):void;

}
class LSMCalender implements Calender{
    constructor( public events:string[]){
        this.events
    }
    addEvents(event: string): void {
        this.events.push(event)
    }
}

const cohort14=new LSMCalender(['HTML','JS'])

cohort14.addEvents('react')
console.log(cohort14)


interface Point{
    x:number;
}

interface Point{
    y:number
}
const point1:Point={x:50,y:30}