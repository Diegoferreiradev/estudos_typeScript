
//string

let nome: string = 'Diego'

console.log(nome)


// numbers

let idade: number = 28

console.log(typeof idade)


// array

let hobbies: any[] = ["Musculação","Correr","Comer"]

console.log(hobbies)
console.log(hobbies[2])
console.log(typeof hobbies)
console.log(hobbies instanceof Array)

hobbies = [100, 200, 300]

console.log(hobbies)


// tuplas

let endereco: [string, number, string, string] = ["Av.Boa Viagem", 1577, "Boa Viagem", "Pracinha de Boa Viagem"]

console.log(endereco)



// enums

enum Cor {
    Cinza,
    Verde,
    Azul,
    Laranja,
    Vermelho
}

let minhaCor: Cor = Cor.Verde

console.log(minhaCor)
console.log(Cor.Laranja, Cor.Vermelho)


// any

let carro: any = 'BMW'

console.log(carro)

carro = {marca: 'BMW', ano: '2020'}

console.log(carro)
