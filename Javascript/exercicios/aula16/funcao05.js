// recursividade
function fatorial(numero) {
    if (numero === 1) {
        return 1
    } else {
        return numero * fatorial(numero-1)
    }
}

console.log(fatorial(5))