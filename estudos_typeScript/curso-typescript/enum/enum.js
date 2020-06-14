var Produto;
(function (Produto) {
    Produto[Produto["Smartphone"] = 0] = "Smartphone";
    Produto[Produto["HeadPhone"] = 1] = "HeadPhone";
    Produto[Produto["SmartTV"] = 2] = "SmartTV";
    Produto[Produto["Notebook"] = 3] = "Notebook";
})(Produto || (Produto = {}));
console.log(Produto.HeadPhone);
console.log(Produto.Notebook, Produto.SmartTV);
var Status;
(function (Status) {
    Status[Status["Ativo"] = 0] = "Ativo";
    Status[Status["Inativo"] = 1] = "Inativo";
    Status[Status["Bloqueado"] = 2] = "Bloqueado";
    Status[Status["Suspenso"] = 3] = "Suspenso";
})(Status || (Status = {}));
var statusVerificacao = Status.Bloqueado;
console.log(Status.Suspenso, Status.Ativo);
