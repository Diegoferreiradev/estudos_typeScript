
interface IAnimal {
    nome: string;
    getNome(): string;
}


class Animais implements IAnimal {

    nome: string;

    getNome(): string {
        return this.nome;
    }

   
    constructor(nome: string) {
        this.nome = nome;        
    }
}

let animal = new Animais('Cachorro');

console.log(animal.getNome());
