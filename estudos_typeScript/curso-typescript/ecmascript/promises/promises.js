function esperar3sPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('3 Segundos depois...');
        }, 3000);
    });
}
esperar3sPromise()
    .then(function (dado) { return console.log(dado); });
