
class Animal {
    nome: string;
    raca: string;
    idade: number;

    constructor(nome: string, raca: string, idade: number) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    getNome(): string {
        return `Meu Cachorro: ${this.nome}`;
    }
}

class Cachorro extends Animal {

    constructor(nome: string, raca: string, idade: number) {
        super(nome, raca, idade);       
    }
}

let cachorro = new Cachorro('Pretão','Raciado', 2);

console.log(cachorro);
console.log(cachorro.getNome());

let nomeCachorro = cachorro.nome = 'Nikki';
console.log(nomeCachorro);
