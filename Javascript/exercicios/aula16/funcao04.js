function fatorial(numero) {

    let fat = 1

    for (contador = numero; contador > 1; contador--) {
            fat *= contador
    }
    return fat
}

console.log(fatorial(5))
