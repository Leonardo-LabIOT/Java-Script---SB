// Aula #9.9: Manipulando objetos no formato JSON

const Solido = {
    X: 15,
    Y: 20,
    Z: 5,
    Origem: [1,3,5],
    tipo: "Cubo",
    existe: false
}
console.log(Solido);

const solidoJson = JSON.stringify(Solido); 
console.log(solidoJson);

console.log(solidoJson.X);
console.log(JSON.parse(solidoJson));
console.log(JSON.parse(solidoJson).Origem);

const meuJson = '{"Nome":"Livro #1","id":255}';
console.log(JSON.parse(meuJson));

// Aula #9.10: Exercício: Lendo e inspecionando objetos

const jsonStr = '{"Nome":"Solido","Coordenadas":[0,0,0],"Velocidade":10}';
// const jsonStr ="{\"Nome\":\"Solido\"}";
const obj = JSON.parse(jsonStr);

console.log(obj);

for (const key in obj) {
    console.log("--> "+key+": "+ obj[key]);
}
	
// Aula #9.11: Inicializando objetos a partir de variáveis

const getSquare = (n)=>{
    const base = n, altura = n;
    const perimetro = n*4;
    const area = n**2;
    const tipo = "Quadrado";
    return (n>=0)? {tipo, base, altura, perimetro, area}:console.log("erro!");
}
console.log(getSquare(3));

// Aula #9.12: Desestruturando objetos

const {base:Base, altura:Altura} = getSquare(5);
console.log(`--> ${Base}\n--> ${Altura}`);