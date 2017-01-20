import * as Rx from 'rxjs/Rx';

const ROOT = './example'

exports.loadFile = (url) => {
    return new Rx.Observable(observer => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${ROOT}/${url}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                observer.next(xhr.responseText);
                observer.complete();
            }
        }
        xhr.send();
    });
}