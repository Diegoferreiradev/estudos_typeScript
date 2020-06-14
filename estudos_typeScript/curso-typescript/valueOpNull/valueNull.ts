
type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulando',
    tel1: '56564545',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)
