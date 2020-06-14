

// /Funcao Anonima
let somar = function(n1: number, n2:number) {
    return n1 + n2
}

console.log(somar(3, 3))


// Funcao
function multiplicar(n1: number, n2: number) {
    return n1 * n2
}

console.log(multiplicar(3, 3))


// Arrow Functions
const subtrair = (v1: number, v2: number) => v1 - v2
console.log(subtrair(5, 3))

const saudacao = () => console.log('Olá')
saudacao()
