import * as Rx from 'rxjs/Rx'

const data = [
    {
        name: 'Bob',
        age: 25,
        country: 'USA'
    },
    {
        name: 'Alice',
        age: 31,
        country: 'France'
    }
];

const source = Rx.Observable.from(data);

const sample = source.take(1000);

sample
    .filter(person => person.age >= 30)
    .reduce((acc, person) => acc + 1)
    .map(count => `${count} persons`)
    .subscribe(message => console.log(message))

sample
    .max(person => person.age)
    .map(person => `The oldest person is ${person.name}`)
    .subscribe(m => console.log(m));