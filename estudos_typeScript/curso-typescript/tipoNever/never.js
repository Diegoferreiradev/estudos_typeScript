function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Smartphone',
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço Inválido!');
        }
    }
};
produto.validarProduto();
