import promptSync from "prompt-sync";
var prompt = promptSync();

const print = texto => console.log(texto);
const scan = (message) => {
    if(message){console.log(message);}
    return prompt("--> "); 
}

export{
    print, scan
};