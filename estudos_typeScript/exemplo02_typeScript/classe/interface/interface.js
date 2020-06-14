var Animais = /** @class */ (function () {
    function Animais(nome) {
        this.nome = nome;
    }
    Animais.prototype.getNome = function () {
        return this.nome;
    };
    return Animais;
}());
var animal = new Animais('Cachorro');
console.log(animal.getNome());
