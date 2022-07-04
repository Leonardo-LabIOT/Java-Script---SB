// Aula 11
// Aula 11.1: Tratando uma exceção lançada pelo JavaScript

// const a = 'a';
try {
	const x = a;
	console.log("Done!");
} catch (error) {
	console.log("Erro: " + error.log);
}
console.log("Fim!");
	
// Aula 11.2: Usando o bloco finally
	
try {
	const a = 10;
	const a1 = a.toUpperCase();
	console.log(a1);
} catch (error) {
	console.log("Erro: " + error);
} finally {
	console.log("Sempre é executado!");
}

// Aula 11.3: Lançando um Error com o throw

var prompt = require("prompt-sync")();

const _divisao = (a,b) => {
	if(isNaN(b)||isNaN(a)||b==0){
		throw new Error("Impossivel efetuar a conta!");
	}
	return console.log(a+" / "+b+" = "+a/b) ;
}
const divisao = ()=>{
	try{
		_divisao(Number(prompt("--> ")),Number(prompt("--> ")));
	}catch(err){
		console.log("Erro -> "+err.log);
		console.log(err.message);
		return divisao();
	}
}
divisao();

// Aula 11.4: Lançando outros tipos de erros com o throw
	
// Aula 11.5: Exercício: fornecendo código JavaScript via teclado

let str = prompt("Digite o código: ");
eval(str);
