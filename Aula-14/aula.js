// Aula 14

// Aula 14.1: Criando um módulo e exportando os seus elementos


// Aula 14.2: Importando os elementos de um módulo

import { println } from "./modulo.js";
import * as m from "./modulo.js";
import { Print } from "./print.js"

println("Olá");
m.println(m.ola);
Print('Olá');

// Aula 14.3: Exportando um elemento default

import PI from "./default.js";

console.log(PI);

// Aula 14.4: Exercício: definindo um módulo com utilitários de strings

import primeiraMaiuscula from "./exercico.js";

Print(primeiraMaiuscula("olá mundo!"));

