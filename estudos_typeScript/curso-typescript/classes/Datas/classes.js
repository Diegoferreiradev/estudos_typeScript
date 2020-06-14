var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var aniversario = new Data(26, 5, 2020);
aniversario.dia = 8;
console.log(aniversario.dia);
