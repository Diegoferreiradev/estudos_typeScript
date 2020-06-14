

// Generics disponíveis da API

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.1)
//avaliacoes.push('9.0')
avaliacoes.push(6.9)

console.log(avaliacoes)


// Array

function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3, 5])
imprimir<number>([8, 9, 7])
imprimir<string>(['Diego','Maria','Andreza'])
imprimir<{ nome: string, idade: number, profissao: string }> ([
    {nome: 'Benedito', idade: 45, profissao: 'Ninja'},
    {nome: 'Amanha', idade: 25, profissao: 'Empresaria'},
    {nome: 'Diego Ferreira', idade: 28, profissao: 'DJ'},
    {nome: 'Maria', idade: 48, profissao: 'Cozinheira'}
])


type Aluno = { nome: string, idade: number}
imprimir<Aluno>([
    {nome: 'Roberval', idade: 19},
    {nome: 'Diego', idade: 28},
    {nome: 'Erika', idade: 26},
    {nome: 'Patrícia', idade: 32},
    {nome: 'Ana', idade: 38}
])

