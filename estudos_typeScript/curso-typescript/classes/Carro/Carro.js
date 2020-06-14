var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        this.velocidadeAtual = 0;
        this.velocidadeMaxima = 200;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual + novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function () {
        return this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        return this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro1 = new Carro('Porscher', 'Cayenne', 100);
console.log(carro1.marca);
console.log(carro1.modelo);
console.log(carro1.acelerar());
console.log(carro1.frear());
