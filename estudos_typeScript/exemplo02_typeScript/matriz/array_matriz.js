var numeros = [5, 9, 7, 10, 15];
var nomes = ['Diego', 'Maria', 'Benedita', 'Severina', 'Zé', 'Pedro'];
var cidades = ['Recife', 'Jaboatão', 'Olinda', 'Paulista'];
/*

console.log(numeros);
console.log(nomes);
console.log(cidades);

numeros.forEach(element => {
    console.log(numeros);
});

cidades.forEach(element => {
    console.log(cidades);
}); */
var linha = (function (valor) {
    console.log("-------" + valor + "-------");
});
linha('Cidades');
for (var index = 0; index < cidades.length; index++) {
    var element = cidades[index];
    console.log(element);
}
linha('Valores');
for (var valor = 0; valor < numeros.length; valor++) {
    var element = numeros[valor];
    console.log(element);
}
linha('Nomes');
for (var cliente = 0; cliente < nomes.length; cliente++) {
    var elementos = nomes[cliente];
    console.log(elementos);
}
