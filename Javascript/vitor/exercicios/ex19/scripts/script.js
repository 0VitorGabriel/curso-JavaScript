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