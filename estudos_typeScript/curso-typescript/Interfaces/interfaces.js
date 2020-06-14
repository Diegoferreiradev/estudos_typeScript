function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Boris';
}
var pessoa = {
    nome: 'Diego',
    idade: 28,
    saudar: function (sobrenome) {
        console.log('Ola, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Benedito', idade: 52, altura: 1.79})
pessoa.saudar('Ferreira');
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
meuCliente.nome = 'Diego';
saudarComOla(meuCliente);
meuCliente.saudar('Ferreira');
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce(function (t, a) { return t * a; });
};
console.log(potencia(3, 10));
