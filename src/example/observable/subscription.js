import * as Rx from 'rxjs/Rx'

const source = Rx.Observable.of(42);

//Process some code ...

source.subscribe(x => console.log(x));
source.subscribe(x => console.log(x + 2));