import * as Rx from 'rxjs/Rx';

const source = Rx.Observable.interval(1000);

const predicate = (val) => {
    let ob$ = null;
    return val > 3
    ? ob$ = Rx.Observable.throw('Error')
    : ob$ = Rx.Observable.of(val);
} 

const test = source
  .flatMap(predicate)
  .retry(2);

test.subscribe(
     val => console.log(val),
     err => console.log(err)
);