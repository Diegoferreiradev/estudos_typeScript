
// Atributos e Métodos estáticos

class Matematica {
   static PI: number = 3.1416           

   static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}


/* 
const m1 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4))

const m2 = new Matematica()
console.log(m2.areaCirc(4)) */

console.log(Matematica.areaCirc(4))
