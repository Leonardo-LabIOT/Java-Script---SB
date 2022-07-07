// import palavraSorteada from "./biblioteca.js";
import palavras from "./biblioteca.js";
import elRandom from "./sortear.js";
import { oChar } from "./config.js";

class Palavra{
    #palavra;
    #visivel;
    #tentado;
    
    constructor(){
        this.#palavra = elRandom(palavras).toUpperCase();
        this.#visivel = [];
        this.#tentado = [];
    }
    get palavra () {
        return this.#palavra;
    }
    get ocChar(){
        return [...this.#palavra].
        map(e => (this.#visivel.includes(e))? e:oChar).
        reduce((a,b) => a+" "+b);
    }
    get tentado(){
        return this.#tentado;
    }
    set tentado(valor){
        this.#tentado.push(valor);
    }
    Win = (valor) => {
        return(
            !this.ocChar.includes(oChar)
            //compararArray(a,b)
        )? true:false;
    }
    logica = (valor) =>{
        let errou = false;
        valor = valor.toUpperCase();
        if(!this.#tentado.includes(valor)){
            this.tentado = valor;
            if([...this.palavra].includes(valor)){
                this.#visivel.push(valor);
                console.log("Acertou!");
                errou = false;
            }else{
                console.log("Errou!");
                errou = true;
            }
        }else{
            console.log("Alooou, ja tentou essa letra!");
            errou = false;
        }
        console.log("Tentavivas: "+this.tentado.reduce((a,b) => a+" "+b));
        console.log("\n"+this.ocChar);
        return errou;
    }
}

export default Palavra;