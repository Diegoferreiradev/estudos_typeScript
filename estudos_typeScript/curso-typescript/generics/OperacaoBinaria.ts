
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {}

   abstract executar(): R
}


class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
    
}


console.log(new SomaBinaria(5, 3).executar())
console.log(new SomaBinaria(3, 3).executar())


class DiferencaEntreDatas extends OperacaoBinaria<Data, String> {

    getTime(data: Data): number {
        let { dia, mes, ano} = data
        return new Date(`${dia}/${mes}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}


const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 6, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())
