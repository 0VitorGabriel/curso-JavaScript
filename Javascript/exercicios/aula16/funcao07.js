/*let funcao_soma = function (...valores) { // função anõnima
    let soma = 0
    for (let pos in valores) {
        soma += valores[pos]
    }
    return soma
}*/

let funcao_soma = new Function ('v1', 'v2', 'return v1+v2') // função construtora

console.log(funcao_soma(10,10))