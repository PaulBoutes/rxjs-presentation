new Promise((resolve, reject) => {
    resolve(42);
}).then((x) => console.log(x));

Promise
    .resolve(42)
    .then((x) => console.log(x));