import * as Rx from 'rxjs/Rx'

const button = document.querySelector('#button');
const clickStream = Rx.Observable.fromEvent(button, 'click');

clickStream.subscribe(p => console.log(p.x));

clickStream
    .scan((acc, _) => acc + 1)
    .subscribe(total => console.log(total));

const everyHours = personStream
    .buffer(Rx.Observable.interval(3600));

const total = everyHours.map(persons => {
    persons
        .map(a => a.age)
        .reduce((a, b) => a + b)
});

const size = everyHours.map(persons => persons.length);

const zipped = Rx.Observable.zip(
    total,
    size
).map((total, size) => total / size)
 .subscribe(average => console.log(average));
