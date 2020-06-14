
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 Segundos depois...')
        }, 3000);
    })
}

esperar3sPromise()
    .then(dado => console.log(dado))
    