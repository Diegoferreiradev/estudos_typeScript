var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$ " + this.preco + " (" + this.desconto * 100 + " % off)";
    };
    Produto.prototype.precoComDesconto = function (preco, desconto) {
        return preco - (desconto * 100);
    };
    return Produto;
}());
var produto1 = new Produto('Smart TV', 999.99, 0.05);
var produto2 = new Produto('Relógio', 350);
console.log(produto1);
console.log(produto1.resumo());
console.log(produto2);
console.log(produto1.precoComDesconto(100, 0.2));
