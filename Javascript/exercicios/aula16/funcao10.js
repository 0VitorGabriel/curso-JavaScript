
// funções geradoras

function* cores() {
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}

let iteração = cores()
console.log(iteração.next().value)
console.log(iteração.next().value)
console.log(iteração.next().value)

function* perguntas() {
    let nome = yield 'Qual é seu nome?'
    let esporte = yield 'Qual é seu esporte favorito?'
    return `seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

let iteração = perguntas()
console.log(iteração.next().value)
console.log(iteração.next('vitor').value)
console.log(iteração.next('natação').value)

function* contador() {
    let i = 0
    while(true) {
        yield i++
        if (i > 5) {
            break // para a execução
        }
    }
}

let iteração = contador()

for (let int of iteração) {
    console.log(int)
}
