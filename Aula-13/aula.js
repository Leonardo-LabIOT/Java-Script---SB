// Aula 13

// Aula 13.1: Criando uma classe com um construtor e atributos

class Pessoa{
    #nome;
    #idade;
    #id;
    #passos;
    
    constructor(nome, idade, id){
        this.#nome = nome;
        this.#idade = idade;
        this.#id = id;
        this.#passos = 0;
    }
    get nome(){
        return this.#nome;
    }
    get idade(){
        return this.#idade;
    }
    get id(){
        return this.#id;
    }
    get passos(){
        return this.#passos;
    }
    get info(){
        return `{"Nome":${this.nome},"Idade":${this.idade},"id":${this.id}}`;
    }
    set nome(valor){
        this.#nome = valor;
    }
    set idade(valor){
        (valor>=0)? this.#idade = valor : console.log("Valor inválido!");
    }
    set id(valor){
        (valor>1000 && valor<9999)? this.#id = valor : console.log("Valor inválido!");
    }
    andar=(n)=>{
        this.#passos+=n;
    }
}

const p = [];
p[0]= new Pessoa("Leonardo", 33, 2105);
const p1 = p[0];
console.log(p[0]);

// Aula 13.2: Manipulando atributos através de operações getter e setter

console.log(p[0].info);
	
// Aula 13.3: Escondendo os atributos definidos na classe

p[1] = new Pessoa("Juliana",37,1015);
	
// Aula 13.4: Definindo métodos em classes

p[0].andar(5);
p[1].andar(3);
console.log("Passos: "+p[0].passos);
console.log("Passos: "+p[1].passos);
	
// Aula 13.5: Exercício: definindo uma classe Student

class Aluno{
    constructor(nome, id){
        this.nome = nome;
        this.id = id;
        this.notas = [];
        this.media = 0;
        this.status = false;
    }
    addNota = (nota) => this.notas.push(nota);
    calcMedia = () => this.notas.reduce((p,q)=>p+q)/this.notas.length;
    apStatus = () => {
        this.media = this.calcMedia();
        this.status = (this.media>=7)? true:false;
        return (this.status)?
        "O aluno: "+this.nome+", RA: " +this.id+ " foi aprovado, com média: "+this.media:
        "O aluno: "+this.nome+", RA: " +this.id+ " foi reprovado, com média: "+this.media;
    }
}
const a1 = new Aluno("Diego", 5548);

a1.addNota(7.0);
a1.addNota(6.0);
a1.addNota(8.0);

console.log(a1.apStatus());
console.log("Aprovado: "+ a1.status+" - Média: " + a1.media);

const a2 = new Aluno("Danilo", 1208);

a2.addNota(3);
a2.addNota(5.0);
a2.addNota(4.0);

console.log(a2.apStatus());
console.log("Aprovado: "+ a2.status+" - Média: " + a2.media);

// Aula 13.6: Criando atributos static

class Funcionario{
    static ID = 1001;
    constructor(nome){
        this.nome = nome;
        this.id = Funcionario.ID++;
    }
}

console.log(new Funcionario("Marcos"));
console.log(new Funcionario("Renato"));
console.log(new Funcionario("Michele"));

// Aula 13.7: Criando métodos static

class Matematica{
    static Exp = (a,b) => a**b; 
}
console.log("Resultado: "+Matematica.Exp(2,3));

// Aula 13.8: Trabalhando com a herança entre classes (Parte 1/2)
	
class Animal{
    andar(passos){
        console.log("O animal andou: "+passos+" passos");
    }
}
class Dog extends Animal{
    constructor(nome){
        super();
        this.nome = nome;
    }
    andar(passos){
        super.andar(passos);
        console.log("O leão andou: "+2*passos+" passos");
    }
    ameaca = (nivel) =>{
        console.log("Perigo: ", nivel);
    }
};

const animal = new Animal();
const dog = new Dog("Rex");

animal.andar(3);
dog.andar(3);
dog.ameaca(5);


// Aula 13.9: Trabalhando com a herança entre classes (Parte 2/2)

console.log(dog.nome);
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
	
// Aula 13.10: Exercício: manipulando contas bancárias

class Account{
    static id = 1000;
    #saldo=0;

    constructor(){
        this.id = ++Account.id;
    }
    deposito(valor){
        console.log("Conta: #"+this.id);
        if(valor>0){
            this.#saldo+=valor;
            console.log("Deposito bem sucedido!");
            console.log("Novo saldo: R$ "+this.#saldo);
        }
        else{
            console.log("Valor inválido!");
        }
    }
    retirada(valor){
        console.log("Conta: #"+this.id+"\nRetirada: R$ " +valor);
        if(valor>this.#saldo){
            console.log("Saldo insuficiente!\nRestante: R$ "+this.#saldo);
            // throw new Error("Saldo Insuficiente!");
        }else{
            this.#saldo-=valor;
            console.log("Retirada bem sucedida!\nNovo saldo: R$ "+this.#saldo);
        }
    }
}
class InvAccount extends Account{
    static id = 2000;
    constructor(){
        super();
        this.id = ++InvAccount.id;
    }
    deposito(valor){
        super.deposito(1.1*valor);
    }
    retirada(valor){
        console.log("Impossível retirar desta conta!\nSomente depósito!");
    }
} 
const conta = [];
conta[0] = new Account();
console.log(conta[0]);

conta[0].deposito(1200);
conta[0].retirada(2001);
conta[0].retirada(155,25);

console.log(conta[0]);

conta[1] = new InvAccount();
console.log(conta[1]);

conta[1].deposito(1200);
conta[1].retirada(2001);
conta[1].retirada(155,25);

console.log(conta[1]);

conta[2] = new Account();
console.log(conta[2]);
conta[3] = new InvAccount();
console.log(conta[3]);
conta[4] = new Account();
console.log(conta[4]);