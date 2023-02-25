let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let resposta = document.getElementById('resposta')
let numeros = []

function isnum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnum(numero.value) && !inlista(numero.value, numeros)) {

        numeros.push(Number(numero.value))

        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resposta.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrou na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (numeros.length === 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for (let pos in numeros) {

            soma += numeros[pos]

            if (numeros[pos] > maior) {
                maior = numeros[pos]
            } if (numeros[pos] < menor) {
                menor = numeros[pos]
            }
        }

        media = soma / total

        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Ao todo temos, ${total} números finalizados</p>`
        resposta.innerHTML += `<p>Maior número digitado: ${maior}</p>`
        resposta.innerHTML += `<p>Menor número digitado: ${menor}</p>`
        resposta.innerHTML += `<p>Soma de todos os valores digitados: ${soma}</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é: ${media.toFixed(2)}</p>`
        item.value = ''
    }
}