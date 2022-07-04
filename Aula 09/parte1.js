//Aula 09
	
// Aula #9.1: Criando objetos
const Person = {
	Nome : "Leonardo",
	Idade : 30,
	Id : 2541,
	gerarId : () => {console.log(Math.trunc((Math.random()*100000)+100000));}
};

console.log(Person);
	
// Aula #9.2: Lendo e alterando as propriedades de um objeto

console.log(Person.Nome);
Person.Nome = "Michelangelo";
console.log(Person.Nome);
Person.Idade++;
console.log(Person.Idade);

Person["Profissão"] = "Programador";
console.log(Person);

// Aula #9.3: Excluindo uma propriedade

delete Person.Profissão;
console.log(Person);

// Aula #9.4: Exercício: Procurando livros em uma biblioteca

const livro = [
	{
		Nome: "Livro #1",
		Ano: 1998,
		Id: "1",
		Status: true
	},
	{
		Nome: "Livro #2",
		Ano: 2010,
		Id: "2",
		Status: false
	},
	{
		Nome: "Livro #3",
		Ano: 2000,
		Id: "3"
	},
	{
		Nome: "Livro #4",
		Ano: 2000,
		Id: "4"
	}
];

console.log(livro);
console.log(...livro);

const procurar = (ano) => {
	livros = [{}];
	let n = 0;
	for (i of livro) {
		if(ano==i.Ano){
			livros[n++] = i;
		}
	}
	return livros;
}

console.log(procurar(2000));
console.log(...procurar(2000));

verificar = () => {
	livros = [{}];
	let n = 0;
	for (i of livro) {
		if(i.Status){
			livros[n++] = i;
		}
	}
	return livros;
}
console.log(...verificar());

// Aula #9.5: Criando funções dentro de objetos
const contador = {
	Valor: 0,
	Inc0: () => {contador.Valor++;},
	Inc1: function(){this.Valor++;}
};

console.log(contador.Valor);
contador.Inc0();
console.log(contador.Valor);
contador.Inc1();
console.log(contador.Valor);

// Aula #9.6: Criando novos objetos usando prototypes

const Pessoa = Object.create(Person);
console.log(Pessoa);
console.log(Person);
Pessoa["Profissão"] = "Programador";
console.log(Pessoa);

Pessoa.gerarId();

// Aula #9.7: Listando e verificando a existência de propriedades

console.log(Object.getOwnPropertyNames(Pessoa));
console.log(Object.getPrototypeOf(Pessoa));

for (const key in Pessoa) {
	console.log("> "+key);
}
 if('Nome' in Pessoa){
	console.log("A propriedade esta contida no Objeto");
 }
	
// Aula #9.8: Funções getters e setters em objetos

const retangulo = {
	_lado: 5,
	_altura: 11,

	get lado(){return this._lado;},
	set lado(newValue){this._lado = newValue;},
	get altura(){return this._altura},
	set altura(newValue){this._altura = newValue;},

	Area: ()=>{return retangulo.lado*retangulo.altura;},
	Perimetro: function (){return 2*(this.lado+this.altura);}
}

console.log(retangulo.lado);
retangulo.lado = 10;
console.log(retangulo.lado);
console.log("Area: "+retangulo.Area());
console.log("Perimetro: "+retangulo.Perimetro());
	
