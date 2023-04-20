let numero_digitado = prompt('digite um número para verificar se ele é par ou ímpar')

const verifica_numero = new Promise((resolve, reject) => {
    if (Number(numero_digitado) % 2 == 0) {
        resolve ('número par')
    } else {
        reject ('número ímpar')
    }
})

verifica_numero.then((message) => {
    alert(message)
}).catch((err) => {
    alert(err)
})