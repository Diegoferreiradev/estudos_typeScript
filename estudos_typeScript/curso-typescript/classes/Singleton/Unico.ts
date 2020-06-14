
class Unico {
    private static instance: Unico = new Unico

    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())

//console.log(new Date())
