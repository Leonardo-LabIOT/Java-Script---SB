// Aula 12
//Aula 12.1: A anatomia de uma expressão lambda

const f2 = x => console.log(x**2);

f2(5);
	
// Aula 12.2: Usando expressões lambda na função filter()

const array = [1,2,3,4,5];
const array1 = [0,1,1,0,1,0,0,1,0];
console.log(...array1);

const array2 = array1.filter(e=>e==1);
console.log(array2.length);

// Aula 12.3: Usando expressões lambda na função map()

const array3 = array1.map(e => (e==1)? "t":"f");
console.log(array3);
	
// Aula 12.4: Usando expressões lambda na função reduce()

console.log(array.reduce((fat,e)=>fat*e));

// Aula 12.5: Usando expressões lambda na função forEach()

array1.forEach((e,i)=>console.log("Elemento: "+ i +" : "+ e));

// Aula 12.6: Criando uma higher-order-function (Parte 1/2)
	
// Aula 12.7: Criando uma higher-order-function (Parte 2/2)

// Aula 12.8: Exercício: retornando o ano de nascimento dos clientes

const clientes=[
	{nome: "Marcos", idade: 32, Status: "Ativo"},
	{nome: "Carlos", idade: 45, Status: "Ativo"},
	{nome: "Joana", idade: 33, Status: "Inativo"},
	{nome: "Julia", idade: 21, Status: "Ativo"},
	{nome: "Renata", idade: 22, Status: "Ativo"},
	{nome: "João", idade: 33, Status: "Ativo"},
	{nome: "Juliana", idade: 32, Status: "Ativo"},
	{nome: "Natalia", idade: 32, Status: "Ativo"},
	{nome: "Ana", idade: 0, Status: "Ativo"},
	{nome: "Pedro", idade: 16, Status: "Ativo"},
	{nome: "Paulo", idade: 60, Status: "Ativo"},
	{nome: "Tadeu", idade: 45, Status: "Ativo"},
	{nome: "Leo", idade: 33, Status: "Ativo"},
	{nome: "Rafael", idade: 45, Status: "Inativo"},
]
const idadeClientesAtivos = clientes
	.filter(e => e.Status=="Ativo")
	.map(e => e.idade)
	.filter(e => e>18)
	.map(e => new Date().getFullYear() - e);

// var deletarIguais = (vetor) => {
// 	for (const i of vetor) {
// 		while(vetor.indexOf(i)!=vetor.lastIndexOf(i)){
// 			vetor.splice(vetor.lastIndexOf(i));
// 		}
// 	}
// 	return vetor;
// }

var deletarIguais = [...new Set(idadeClientesAtivos)];
console.log(deletarIguais);

// Aula 12.9: Exercício: descobrindo dados relacionados às idades dos clientes

const clientesAtivos = clientes.filter((e)=> e.Status == "Ativo").filter(e=>e.idade>=18);
let older = {idade:-1}; 
let younger = {idade:500};
let idadeAvg = 0;

for (const key in clientesAtivos) {
	younger = (younger.idade > clientesAtivos[key].idade)? clientesAtivos[key]:younger;
	older = (older.idade < clientesAtivos[key].idade)? clientesAtivos[key]:older;
	idadeAvg += clientesAtivos[key].idade;
}

console.log("Mais Velho: " +older.nome+ "\tIdade:\t" +older.idade+ "\nMais Novo: " +younger.nome+ "\tIdade:\t"+
younger.idade+"\nMédia:\t" +idadeAvg/clientesAtivos.length);