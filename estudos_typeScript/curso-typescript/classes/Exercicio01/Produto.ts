
class Produto {
    nome: string
    preco: number
    desconto: number

    constructor(nome: string, preco: number, desconto: number = 0) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto 
    }

    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100} % off)`
    }   
}

const produto1 = new Produto('Smart TV', 999.99, 0.05)
const produto2 = new Produto('Relógio', 350)

console.log(produto1)
console.log(produto2)
console.log(produto1.resumo())
