let txt_numero = document.querySelector('input#numero')
let select = document.querySelector('select#lista')
let resposta = document.querySelector('div#resposta')
let lista = []

function isnumeric(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(num, list) {
    if (list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumeric(txt_numero.value) && !inlist(txt_numero.value, lista)) {

        lista.push(Number(txt_numero.value))

        let item = document.createElement('option')
        item.text = `Valor ${txt_numero.value} adicionado`
        select.appendChild(item)
        resposta.innerHTML = ''
    } else {
        alert('Valor inválido ou ja encontrado na lista')
    }
    txt_numero.value = ''
    txt_numero.focus()
}
11
function finalizar() {
    let total_numero = lista.length
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0

    for (let pos in lista) {
        soma += lista[pos]

        if (lista[pos] > maior) {
            maior = lista[pos]
        } if (lista[pos] < menor) {
            menor = lista[pos]
        }
    }
    
    let media = soma / total_numero

    resposta.innerHTML = `<p> ${maior} ${menor} ${soma} ${media} ${total_numero} </p>`
    mostrar_resultado(maior, menor, soma, media, total_numero)
}

function mostrar_resultado(mai, men, som, med, tot) {
    resposta.innerHTML = `<p>Ao todo foram ${tot} números adicionados</p>`
    resposta.innerHTML += `<p>Maior número digitado: ${mai}</p>`
    resposta.innerHTML += `<p>Menor número digitado: ${men}</p>`
    resposta.innerHTML += `<p>Soma de todos os números: ${som}</p>`
    resposta.innerHTML += `<p>Média dos números: ${med.toFixed(2)}</p>`
}