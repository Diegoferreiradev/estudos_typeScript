

let numeros: number[] = [5, 9, 7, 10, 15];
let nomes: string[] = ['Diego','Maria','Benedita','Severina','Zé','Pedro'];
let cidades: Array<string> = ['Recife','Jaboatão','Olinda','Paulista'];
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


let linha = ((valor: string) => {
    console.log(`-------${valor}-------`);
});

linha('Cidades');

for (let index = 0; index < cidades.length; index++) {
    const element = cidades[index];
    console.log(element);
}

linha('Valores');

for(let valor = 0; valor < numeros.length; valor++) {
    const element = numeros[valor];
    console.log(element);
}

linha('Nomes');

for(let cliente = 0; cliente < nomes.length; cliente++) {
    const elementos = nomes[cliente];
    console.log(elementos);
}
