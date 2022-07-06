const primeiraMaiuscula = (palavra) => {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
}

export default primeiraMaiuscula;