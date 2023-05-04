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

        numeros.map((num) => {
            soma += num

            if (num > maior) {
                maior = num
            }

            if (num < menor) {
                menor = num
            }
        })

        media = soma / total

        mostrador(maior, menor, soma, media, total)
    }
}

function mostrador(mai, men, som, med, tot) {
    resposta.innerHTML = ''
    resposta.innerHTML += `<p>Ao todo temos, ${tot} números finalizados</p>`
    resposta.innerHTML += `<p>Maior número digitado: ${mai}</p>`
    resposta.innerHTML += `<p>Menor número digitado: ${men}</p>`
    resposta.innerHTML += `<p>Soma de todos os valores digitados: ${som}</p>`
    resposta.innerHTML += `<p>A média dos valores digitados é: ${med.toFixed(2)}</p>`
    item.value = ''
}