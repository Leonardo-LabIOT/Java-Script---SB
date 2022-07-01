//Aula 07

//Aula 7.1 - Arrays I

let a = [], b=[1,2,3];

a[0] = 4;
a[1] = 5;
a[2] = 6;

for (let i = 0; i < 3 ; i++) {
    b[i] += a [i];
}

console.log(b);

//Aula 7.2 - Arrays II

for (const i of b) {
    console.log(i);
}

//Aula 7.3 - Arrays III

const Temp = [10,10,5,10,10,10,15,10,10,10];
let tMin = 10000, tMax = 0, tAvg = null, dMin = null, dMax = null;

for (const i of Temp) {
    tMin = i<tMin? i:tMin;
    tMax = i>tMax? i:tMax;
    tAvg += i;
}

console.log("Menor Temperatura: ", tMin, "°C");
console.log("Maior Temperatura: ", tMax, "°C");
console.log("Temperatura Média: ", tAvg/Temp.length,"°C\n");

//Aula 7.4 - Arrays IV - Adicionando Valores ao array

const frutas = [];
const frutasA = ['abacate', 'ameixa', 'amora'];
const frutasB = ['berinjela', 'banana'];
const frutasC = ["carambola", "cereja"];

frutasC.push("cabocha");
frutasC.unshift("caqui");
console.log(frutasC);

frutas.push(...frutasB);
frutas.push(...frutasC);
frutas.unshift(...frutasA);
console.log(frutas);

//Aula 7.5 - Arrays Splice

const meses = ["janeiro","fevereiro","segunda-feira","terça=feira","março", "dezembro"];
const dSemana = meses.splice(2,2);
const mes4 = "abril";
meses.splice(3 , 0 , mes4, "maio", "junho");

console.log(dSemana);
console.log(meses);

//Aula 7.6 - Arrays

//Aula 7.7 - Arrays Multidimensionais = Matriz

//Aula 7.8 Arrays - Operações

const newFrutas = frutasA.concat("abobora");
console.log(newFrutas);
console.log(newFrutas.sort());
console.log(newFrutas.sort().reverse());
console.log(newFrutas.join(" | "));
console.log(newFrutas.slice(0,2));
console.log(newFrutas.indexOf("abobora"));

//Aula 7.9 - Arrays - spread -> (...array1)

