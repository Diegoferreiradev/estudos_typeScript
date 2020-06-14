
let usuario = {
    nome: 'Diego',
    idade: 28,
    profissao: 'Engenheiro de Software'
}

//console.log(usuario)


let usuario2: {nome: string, idade: number, profissao: string} = {
    nome: 'Benedito',
    idade: 42,
    profissao: 'Ninja'
}

//console.log(usuario2)
/*

function baterPonto(hora: number) {
    let mensagem
        if (hora <= 8) {
            mensagem = console.log('Ponto Normal')
        } else {
            mensagem = console.log('Fora do Horário')
        }

    return mensagem
}

console.log()

baterPonto(8)

*/


let funcionario: {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['Diego', 'Ana', 'Fernando'],
    baterPonto (horas: number): string {
        if (horas < 8) {
            return 'Ponto Batido com Adiantamento'
        } else if (horas === 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do Horário'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(6))
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))
