
class Produto { 
    nome: string;
    quantidade: number;
    preco: number;
    descricao?: string;

    constructor(nome: string, quantidade: number, preco: number){
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }
}

let p = new Produto('Smartphone', 3, 999.99);

console.log(p);
console.log(p instanceof Object);
