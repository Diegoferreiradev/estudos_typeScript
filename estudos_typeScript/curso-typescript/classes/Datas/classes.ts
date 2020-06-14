
class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(26, 5, 2020)

aniversario.dia = 8

console.log(aniversario.dia)
console.log(aniversario.mes)
console.log(aniversario.ano)
