/*let soma = function (n1,n2) {
    return n1+n2
}*/

// arrow function 

let soma_valores = (...valores) => {
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    return soma                    
}                 
console.log(soma_valores(17,8,9,3,6,10,4))               

let nome = n => {
    return n
}
console.log(nome('Vitor'))

let soma_mais_10 = numero => numero + 10
console.log(soma_mais_10(10))

