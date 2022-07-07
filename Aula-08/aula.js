//Aula 08

//Aula 8.1 - Funções
pulaLn();
printLn("Olá Mundo!!!");
pulaLn();

function pulaLn (){
    console.log("\n********************************************************************************\n");
}

//Aula 8.2 - Funções II - Recebendo Parametros

function printLn(texto){
    console.log(texto);
}

//Aula 8.3 - Funções III return x

printLn(calcArea(5));
printLn(calcVolCubo(3));

function calcArea(lado){
    return lado**2;
}
function calcVolCubo(lado){
    return lado**3;
}
//Aula 8.4 - Funções IV - Exercicio - contagem de elemento

const vX = 1, array = [1,1,1,2,2,3,1,2];

pulaLn();
printLn(moda(vX, array));
pulaLn();

function moda(vX, array1){
    let n = 0;
    array1.forEach((value) =>{
        if(vX == value){
            n++;
            console.log(vX," : ", n);  
        }
    })
    return "\nO elemento: "+vX+" aparece "+n+" vezes no array: [ "+array1.join(" , ")+" ]";
}

//Aula 8.5 - Funções V

//Aula 8.6 - Funções VI

console.log(soma(11,11,11,11,12,21,13,31));

function soma(...arraySoma){
    let vSoma = 0;
    for (let i = 0; i < arraySoma.length; i++) {
        vSoma += arraySoma[i];
    }
    return "A soma é: "+vSoma;
}

//Aula 8.7 - Funções VII

//Aula 8.8 - Funções VIII - Fatorial

let numFix = 500000, listaFat = [];

fatorial = (n) => {return (n==0)? 1:n*fatorial(n-1)};

for(let i = 0 ; i < 10; i++){
	listaFat[i] = fatorial(i);
	numFix -= listaFat[i];
	printLn("Fatorial de "+i+" : "+listaFat[i]);
}

printLn(numFix);
pulaLn();

//Aula 8.9 - Objetos

square = (N) => {return N**2;}
const FALSE = () => {return false;}

inv = (func) => {return !func;}

const teste = square;

if(inv(FALSE())){
    console.log(teste(4));
}

parImpar = (x) => {
    return (x%2==0)? "Par":"Impar";
}

let numero = 5;
console.log("O número: "+numero+" é: "+parImpar(numero));

numero = 6;
console.log("O número: "+numero+" é: "+parImpar(numero));
pulaLn();

//Aula 8.10 - spread operator

spredSoma = (...meuArray) => { 
    let sum = 0;
    for (const i of meuArray) {
        sum += i;
    }
    return sum;
}
const novoArray = [2,2,4,5,6,7];
console.log(spredSoma(...novoArray));
