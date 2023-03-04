function soma(...valores) {
    soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    return soma
}

console.log(soma(4,4))