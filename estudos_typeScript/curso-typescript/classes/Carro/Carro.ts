
class Carro {

    private velocidadeAtual: number = 0
    

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
        
    }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
       return this.alterarVelocidade(5)
    }

    public frear(): number {
      return this.alterarVelocidade(-5)
    }
}


const carro1 = new Carro('Porscher', 'Cayenne', 185)
/* 
console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.acelerar())
console.log(carro1.frear()) */


class Ferrari extends Carro {

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
     }
 
     public frear(): number {
       return this.alterarVelocidade(-5)
     }
}

const f50 = new Ferrari( 'F50', 333)
console.log(`Marca: ${f50.marca} Modelo: ${f50.modelo} `)
console.log(f50.acelerar())
console.log(f50.frear())
