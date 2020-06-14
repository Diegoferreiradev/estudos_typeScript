
class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const Aeronave = new Aviao('Jato','F-16')

/* Aeronave.modelo = 'Teste'
Aeronave.prefixo = 'F-22' */

console.log(`Descrição da Aeronave`, Aeronave)

console.log(`Modelo: ${Aeronave.modelo}`)
console.log(`Prefíxo: ${Aeronave.prefixo}`)
