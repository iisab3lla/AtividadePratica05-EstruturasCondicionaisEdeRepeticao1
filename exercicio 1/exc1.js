// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let idadeAlunos = 0;
let estudantes = -1;
let idade;

while ((idade = parseInt(prompt("Digite a idade do aluno (ou 999 para encerrar):"))) !== 999) {
    if (!isNaN(idade)) { 
        idadeAlunos += idade;
        estudantes++;
    }
}

if (estudantes >= 0) {
    document.write(`Quantidade de alunos na turma: ${estudantes + 1} <br>`);
    document.write(`Média de idade dos alunos: ${idadeAlunos / estudantes .toFixed(2)} <br>`);
} else {
    document.write(`Não há alunos na turma.`);
}