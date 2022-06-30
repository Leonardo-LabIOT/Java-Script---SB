//Aula-02
//npm install prompt-sync
//const qualquer = require("prompt-sync");

const prompt = require("prompt-sync")();

let numero = [], avgNum = 0, n = Number(prompt("De quantos números deseja retirar a média: "));

for(let i = 0; i < n; i++){
    numero[i] = Number(prompt("Número "+ Number(i+1)+": "));
    avgNum += numero[i];
}

avgNum /= n;
console.log("A Média é: ",avgNum);


