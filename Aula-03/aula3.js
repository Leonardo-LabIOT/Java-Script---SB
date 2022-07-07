//Aula 03

//Aula 3.1 - Dados Primitivos

const v1 = 5; 		console.log(typeof(v1)); 	// --> Number
const v2 = 5.5; 	console.log(typeof(v2)); 	// --> Number
const v3 = true;	console.log(typeof(v3)); 	// --> boolean
const v4 = 'a'; 	console.log(typeof(v4)); 	// --> String
const v5 = "b";		console.log(typeof(v5)); 	// --> String

//Aula 3.2 - Math

let valor1 = 5.6;
const valores = [2, 3, 3, 30, 20,-20,-40];

console.log(Math.ceil(valor1)); 	// --> 6 cima
console.log(Math.floor(valor1)); 	// --> 5 baixo
console.log(Math.round(valor1)); 	// --> 6 
console.log(Math.abs(-15)); 		// --> 15 valor absoluto
console.log(Math.sqrt(25));			// --> 5 raiz quadrada
console.log(Math.pow(3,3)); 		// --> 27 exponencial
console.log(Math.max(...valores)); 	// --> 30 maior valor
console.log(Math.min(...valores)); 	// --> -40 menor valor

//Aula 3.3 - Strings
//Aula 3.4 - Exercicio - Real para Dollar

const prompt = require("prompt-sync")();
const valorReal = Number(prompt("Digite o valor que deseja converter: ")).toFixed(2);
const valorCot = prompt("Digite a cotação do dollar: ");

console.log("O valor: R$ ", valorReal," equivale, atualmente, à: U$ ", (Number(valorReal/valorCot)).toFixed(2));

//Aula 3.5 - Exercicio

let salario = Number(prompt("Forneça o salário do funcionário: R$ "));
const aumento = Number(prompt("Qual o valor do aumento em %: "));

salario += salario*(aumento/100);
console.log("O novo salario é: R$ ", Number(salario).toFixed(2));

//Aula 3.6 - Exercício IMC

const peso = Number(prompt("Qual o seu peso em kg: "));
const altura = Number(prompt("Qual a sua altura em m: "));

console.log("\nPeso:\t", peso, "kg\nAltura:\t", altura,"m\nIMC:\t",peso/(Math.pow(altura , 2)),"kg/m²\n"); 

//Aula 3.7 - Conversão de Tipos de Dados

//Aula 3.8 - Strings Parte 1

const s1 = 'JAVASCRIPT JS';
let s2 = s1.slice(4,10);
console.log("slice: ",s2);
s2 = s1.slice(4);
console.log("slice: ",s2);
s2 = s1.substring(4.10);
console.log("substring: ",s2);

//Aula 3.9 - Strings Parte 2

s2 = s1.toLowerCase();
console.log(s2);
s2 = s2.toUpperCase();
console.log(s2);
console.log(s2.length);
console.log(s2.indexOf('A'));
console.log(s2.lastIndexOf('A'));

//Aula 3.10 - NULL/Undefined
//Aula 3.11 - BigInt
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
console.log(typeof(maxNumber));
const maxNumber0 = BigInt("5465465464646546546546546546546132132154654");
console.log(maxNumber0);
console.log(typeof(maxNumber0));
const maxNumber1 = 7987987987987987987987987987987987987987987987987n;
console.log(maxNumber1);
console.log(typeof(maxNumber1));

// binarios, hexadecimais, etc

const b = 0b1111; 		//binario
const h = 0xf; 			//hexadecimal
const o = 0o017; 		//octal

console.log("Bin:\t",b,"\nHexa:\t",h,"\nOctal:\t",o);

//Aula 3.12 - wrapper

//Aula 3.13 - Datas - parte 1

const date = new Date("1989-03-13 01:30:00 -03");
console.log(date.toLocaleDateString());

//Aula 3.14 - Datas - parte 2

const d1 = new Date(); // data do sistema
const d2 = new Date(1989,03,13);

//console.log(d1.toLocaleTimeString()); //retorna horário local

console.log((d1.getTime()-d2.getTime())/(365*3600000*24));



