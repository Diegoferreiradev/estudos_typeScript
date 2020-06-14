
interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Boris'
}

const pessoa: Humano = {
    nome: 'Diego',
    idade: 28,
    saudar(sobrenome: string) {
        console.log('Ola, meu nome é ' + this.nome + ' ' + sobrenome)
    } 
}


saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({ nome: 'Benedito', idade: 52, altura: 1.79})
pessoa.saudar('Ferreira')


class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string): void {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
    }   
}

const meuCliente = new Cliente()
meuCliente.nome = 'Diego'
saudarComOla(meuCliente)
meuCliente.saudar('Ferreira')
console.log(meuCliente.ultimaCompra)


// Interface Função

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)  // Exponenciação
