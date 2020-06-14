
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((a, b) => a + b)
    }   
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((a, b) => a * b)
    }    
}

let c1 = new Soma()
c1.executar(5,10,15,20)
console.log(c1.getResultado())

let c2 = new Multiplicacao()
c2.executar(3, 5, 2)
console.log(c2.getResultado())
