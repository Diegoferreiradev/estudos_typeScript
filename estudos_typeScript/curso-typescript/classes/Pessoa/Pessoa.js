var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor > 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa();
pessoa1.idade = 28;
console.log(pessoa1.idade);
pessoa1.idade = -10; // Validação
console.log(pessoa1.idade);
