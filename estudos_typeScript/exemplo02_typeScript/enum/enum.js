var Cor;
(function (Cor) {
    Cor[Cor["Alemanha"] = 0] = "Alemanha";
    Cor[Cor["Brasil"] = 1] = "Brasil";
    Cor[Cor["It\u00E1lia"] = 2] = "It\u00E1lia";
    Cor[Cor["Mex\u00EDco"] = 3] = "Mex\u00EDco";
    Cor[Cor["Holanda"] = 4] = "Holanda";
})(Cor || (Cor = {}));
var NCor;
(function (NCor) {
    NCor[NCor["Brasil"] = 1] = "Brasil";
    NCor[NCor["Alemanha"] = 5] = "Alemanha";
    NCor[NCor["Holanda"] = 8] = "Holanda";
    NCor[NCor["Italia"] = 3] = "Italia";
    NCor[NCor["Mexico"] = 10] = "Mexico";
})(NCor || (NCor = {}));
console.log(Cor.Brasil);
console.log(NCor.Italia);
