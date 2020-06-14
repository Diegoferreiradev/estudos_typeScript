var Unico = /** @class */ (function () {
    function Unico() {
    }
    Unico.getInstance = function () {
        return Unico.instance;
    };
    Unico.prototype.agora = function () {
        return new Date;
    };
    Unico.instance = new Unico;
    return Unico;
}());
console.log(Unico.getInstance().agora);
