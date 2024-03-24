// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = parseFloat(prompt('Digite a largura do terreno'));
let comprimento = parseFloat(prompt('Digite o comprimento do terreno'));

let calculo = largura * comprimento;
let metro = Number(100);
let metro2 = Number(500);

if (calculo <= metro){
    document.write(`Abaixo de 100m2: ${calculo}m² = TERRENO POPULAR`)
} 
if (calculo > metro && calculo < metro2){
    document.write(`Entre 100m² e 500m²: ${calculo}m² = TERRENO MASTER<br>`)
} 
else if(calculo >= metro2){
    document.write(`Acima de 500m²: ${calculo}m² = TERRENO VIP`)
} else{
    document.write('Insira um número válido');
}