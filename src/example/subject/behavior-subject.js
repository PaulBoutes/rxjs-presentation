import * as Rx from 'rxjs/Rx'

const subject = new Rx.BehaviorSubject(0);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(3);