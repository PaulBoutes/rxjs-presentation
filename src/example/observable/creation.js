import * as Rx from 'rxjs/Rx'

Rx.Observable
  .create((observer) => observer.next(42))
  .subscribe((x) => console.log(x));

Rx.Observable
  .of(42)
  .subscribe((x) => console.log(x));