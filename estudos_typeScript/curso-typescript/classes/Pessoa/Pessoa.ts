
class Pessoas {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor > 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoas()
pessoa1.idade = 28
console.log(pessoa1.idade)

pessoa1.idade = -10         // Validação
console.log(pessoa1.idade)
