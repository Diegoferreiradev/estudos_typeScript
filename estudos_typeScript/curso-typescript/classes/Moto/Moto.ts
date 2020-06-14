
class Moto {
    public nome: string


    constructor(nome: string, private velocidade: number = 0) {
        this.nome = nome
    }

    public buzinar(): void {
        console.log('Tooooooooooooof!')
    }

    public acelerar(delta: number): void {
        this.velocidade += delta
    }
}

const m1 = new Moto('Shineray', 190)
m1.buzinar()
m1.acelerar(30)
console.log(m1)