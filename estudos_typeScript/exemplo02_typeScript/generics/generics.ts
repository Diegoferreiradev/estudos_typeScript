
class Generics<T> {
    public nome: T;
  
    constructor(nome: T) {
        this.nome = nome;       
    }

    getNome(): T {
        return this.nome;
    }

   getType(): string {
       return typeof(this.nome);
   }
}

const generic = new Generics<string>('House Music');
console.log(generic.getNome());
console.log(generic.getType());

const generic2 = new Generics<number>(1000);
console.log(generic2.getNome());
console.log(generic2.getType());

const generic3 = new Generics<boolean>(false);
console.log(generic3.getNome());
console.log(generic3.getType());
