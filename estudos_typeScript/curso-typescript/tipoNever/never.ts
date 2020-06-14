
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Smartphone',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('Preço Inválido!');
        }
    }
}

produto.validarProduto()
