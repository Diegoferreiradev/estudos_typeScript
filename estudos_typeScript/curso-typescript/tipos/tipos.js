//string
var nome = 'Diego';
console.log(nome);
// numbers
var idade = 28;
console.log(typeof idade);
// array
var hobbies = ["Musculação", "Correr", "Comer"];
console.log(hobbies);
console.log(hobbies[2]);
console.log(typeof hobbies);
console.log(hobbies instanceof Array);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
var endereco = ["Av.Boa Viagem", 1577, "Boa Viagem", "Pracinha de Boa Viagem"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Vermelho"] = 4] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2020' };
console.log(carro);
