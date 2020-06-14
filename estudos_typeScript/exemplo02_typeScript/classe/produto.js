var Produto = /** @class */ (function () {
    function Produto(nome, quantidade, preco) {
        this.nome = nome;
    }
    return Produto;
}());
var p = new Produto('Smartphone', 5, 999.99);
//console.log(p.nome);
console.log(p);
