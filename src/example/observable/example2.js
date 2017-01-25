import * as Rx from 'rxjs/Rx'

const b = document.querySelector('#send');
const b2 = document.querySelector('#unsub');
const s = Rx.Observable.fromEvent(b,'click');
const u = Rx.Observable.fromEvent(b2,'click');

s.map(m => [m.clientX, m.clientY])
 .map(p => `Position: ${p}`)
 .subscribe(console.log);

s.scan((acc, _) => acc + 1, 0)
 .map(c => `Count: ${c}`)
 .subscribe(console.log);

const personStream = Rx.Observable
      .interval(700)
      .map(i => ({age: i, name: `Bob ${i}`}));

const everySeconds = personStream
      .buffer(Rx.Observable.interval(1000));

const total = everySeconds
    .map(p => p
        .map(a => a.age)
        .reduce((a, b) => a + b, 0)
        );

const size = everySeconds.map(p => p.length);

const zipped = Rx.Observable
 .zip(total, size)
 .map(([total, size]) => total / size)
 .map(average => `Average: ${average}`)
 .subscribe(console.log);

u.subscribe(_ => zipped.unsubscribe());
