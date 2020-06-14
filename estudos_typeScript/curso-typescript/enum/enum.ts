
enum Produtos {
    Smartphone,
    HeadPhone,
    SmartTV,
    Notebook
}

console.log(Produtos.HeadPhone)
console.log(Produtos.Notebook, Produtos.SmartTV)


enum Status {
    Ativo,
    Inativo,
    Bloqueado,
    Suspenso
}

let statusVerificacao: Status = Status.Bloqueado

console.log(Status.Suspenso, Status.Ativo);
