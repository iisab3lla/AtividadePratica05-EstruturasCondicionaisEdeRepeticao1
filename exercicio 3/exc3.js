// Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = Number (prompt("Digite o valor inicial desejado!"));
let valorFinal = Number (prompt("Digite o valor final desejado!"));
let incremento = Number (prompt("Digite o valor do incremento!"));

for(let i = valorInicial; i <= valorFinal; i+= incremento){
    document.write(`${i} <br>`)
};