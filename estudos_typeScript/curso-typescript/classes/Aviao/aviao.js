var Aviao = /** @class */ (function () {
    function Aviao(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    return Aviao;
}());
var Aeronave = new Aviao('Jato', 'F-16');
/* Aeronave.modelo = 'Teste'
Aeronave.prefixo = 'F-22' */
console.log("Descri\u00E7\u00E3o da Aeronave", Aeronave);
console.log("Modelo: " + Aeronave.modelo);
console.log("Pref\u00EDxo: " + Aeronave.prefixo);
