var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    Animal.prototype.getNome = function () {
        return "Meu Cachorro: " + this.nome;
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, raca, idade) {
        return _super.call(this, nome, raca, idade) || this;
    }
    return Cachorro;
}(Animal));
var cachorro = new Cachorro('Pretão', 'Raciado', 2);
console.log(cachorro);
console.log(cachorro.getNome());
var nomeCachorro = cachorro.nome = 'Nikki';
console.log(nomeCachorro);
