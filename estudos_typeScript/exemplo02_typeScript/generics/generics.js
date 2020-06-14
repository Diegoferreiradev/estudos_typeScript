var Generics = /** @class */ (function () {
    function Generics(nome) {
        this.nome = nome;
    }
    Generics.prototype.getNome = function () {
        return this.nome;
    };
    Generics.prototype.getType = function () {
        return typeof (this.nome);
    };
    return Generics;
}());
var generic = new Generics('House Music');
console.log(generic.getNome());
console.log(generic.getType());
var generic2 = new Generics(1000);
console.log(generic2.getNome());
console.log(generic2.getType());
var generic3 = new Generics(false);
console.log(generic3.getNome());
console.log(generic3.getType());
