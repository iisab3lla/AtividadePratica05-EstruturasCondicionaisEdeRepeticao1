// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = String (prompt("Digite seu nome!"));
let genero = (prompt("Digite seu gênero! (1 para feminino e 2 para masculino)"));
let compras = parseFloat (prompt("Digite o valor de suas compras!"));

let calculoF = compras * (13/100);
let calculoM = compras * (5/100);


switch(genero){
    case `1`:
        document.write(`Suas compras com desconto são R$${compras - calculoF}!`)
    break;
    case `2`:
        document.write(`Suas compras com desconto são R$${compras - calculoM}!`)
    break;
    default:
        document.write(`Insira um valor válido!`)
};