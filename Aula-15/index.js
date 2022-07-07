import { chances } from "./config.js";
import {scan,print} from "./io.js";
import Palavra from "./palavra.js";

const chute = () => {
    const a = scan("Digite uma Letra: ");
    return a.charAt(0);
}
const play = (n) => {
    let win = false;
    const palavra = new Palavra;
    console.log(palavra.palavra);

    for(let i = 0 ; i < n ; i++){
        i+=(palavra.logica(chute()))? 0:-1;
        win = palavra.Win();
        if(win){print("\nPARABENS!!!");break;}
        print("\nRestam "+ Number(n-i-1) +" tentativas!");
    }
    print(`Você ${(win)?"ganhou!\n":"perdeu!\n"}`);
    print("Resposta: "+palavra.palavra);
    print("\n****** Fim do Jogo!!! ******\n");
    switch (scan("Deseja jogar novamente: s/n")) {
        case 's': play(chances); break;
    }
}

play(chances);