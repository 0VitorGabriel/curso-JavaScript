let soma = (...valores) => {
    let somar = val => {
        let resultado = 0 
        for (let pos in val) {
            resultado += val[pos]
        }
        return resultado
    }
    return somar(valores)
}

console.log(soma(1,3,5))