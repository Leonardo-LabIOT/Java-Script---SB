//Aula-02
//npm install prompt-sync
//const qualquer = require("prompt-sync");

const qualquer = require("prompt-sync")();

let numero = [], avgNum = 0, n = Number(qualquer("De quantos números deseja retirar a média: "));

for(let i = 0; i < n; i++){
    numero[i] = Number(qualquer("Número "+ Number(i+1)+": "));
    avgNum += numero[i];
}

avgNum /= n;
console.log("A Média é: ",avgNum);


