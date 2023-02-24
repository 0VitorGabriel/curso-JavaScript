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
        alert('Tudo ok')
    } else {
        alert('Valor inválido ou já encontrou na lista')
    }
}