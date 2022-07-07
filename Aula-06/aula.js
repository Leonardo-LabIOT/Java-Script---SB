//Aula - 06

//Aula 6.1 - While

//Aula 6.2 - Do While

//Aula 6.3 - Tabuada

for(let i = 0; i <= 10; i++){
    console.log("Tabuada do",i,":");
    for (let j = 0; j <= 10 ; j++) {
        console.log(i,"X",j,"=",i*j);
    }
    console.log("");
}

//Aula 6.4 - For

//Aula 6.5 - Exercicio:

const prompt = require('prompt-sync')();

let textoNovo = "", texto = prompt("Digite o Texto: ");

for (let i = 0; i < texto.length; i++) {
    textoNovo += texto.charAt(i) + " ";
}
console.log(textoNovo);
 
//Aula 6.6 - Continue

//Aula 6.7 - Break

//Aula 6.8 - Exercicio

let tents = 1, newNum = 0, num = Math.trunc(Math.random(0,10)*100);

while(1){
    newNum = prompt("Digite um número: ");
    if(newNum == num){
        console.log("Voce acertou, parabens!");
        console.log("Tentativas: ", tents );
        break;
    }
    else if(tents>10){
        console.log("Voce Perdeu!");
        break;
    } 
    else{
        tents++;
        console.log("Voce errou, tente novamente!");
        if(newNum < num) console.log(newNum, "é menor do que a resposta!");
        else {console.log(newNum, "é maior do que a resposta!");}
        continue;
    }
    console.log("Não é para aparecer!");
}
console.log("Fim do Jogo!");

//Aula 6.9 Labels

forI: for(let i = 0; i <= 10; i++){
    console.log("Tabuada do",i,":");
    forJ: for (let j = 0; j <= 10 ; j++) {
        console.log(i,"X",j,"=",i*j);
        if(j==5){
            break forJ;
        }
    }
    console.log("");
}