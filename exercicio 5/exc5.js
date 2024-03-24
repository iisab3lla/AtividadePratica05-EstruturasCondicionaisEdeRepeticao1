// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distanciaKM = parseInt (prompt("Digite a distância que deseja percorrer em KM!"));


if(distanciaKM < 200){
    let calculo1 = distanciaKM * 0.50;
    document.write(`O preço da passagem é: R$${calculo1}`)
} else if (distanciaKM > 200){
    let calculo2 = distanciaKM * 0.45;
    document.write(`O preço da passagem é: R$${calculo2}`)
};