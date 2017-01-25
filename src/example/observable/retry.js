import * as Rx from 'rxjs/Rx';

const source = Rx.Observable.interval(1000);

const predicate = (val) => {
    return val >= 3
    ? Rx.Observable.throw('Error')
    : Rx.Observable.of(val);
} 

const test = source
  .flatMap(predicate)
  .retry(2);

test.subscribe(
     val => console.log(val),
     err => console.log(err)
);