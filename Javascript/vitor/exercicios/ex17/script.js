const txt_inicio = document.querySelector('input#inicio')
const txt_fim = document.querySelector('input#fim')
const txt_passo = document.querySelector('input#passo')
let resultado = document.querySelector('div#resultado')

function verificador() {
    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        alert('[ERRO] faltam dados!')
        resultado.innerHTML = 'Impossivel contar...'
        return true
    }
}

function contar() {
    if (verificador()) {
        // executa ele mesmo
    } else {
        resultado.innerHTML = 'Contando... <br>'

        let inicio = Number(txt_inicio.value)
        let fim = Number(txt_fim.value)
        let passo = Number(txt_passo.value)

        if (passo <= 0) {
            alert('Passo inválido, considernado passo 1')
            passo = 1
        }

        if (inicio < fim) {
            contagem_progressiva(inicio, fim, passo) 
        } else if(inicio > fim) {
            contagem_regressiva(inicio, fim, passo)
        }

        resultado.innerHTML +=  ` \u{1F3C1}`
    }
}

function contagem_progressiva(ini, fi, pass) {
    for (let contador = ini; contador <= fi; contador += pass) {
        resultado.innerHTML += `${contador}  \u{1f449}`
    }
}

function contagem_regressiva(ini, fi, pass) {
    for (let contador = ini; contador >= fi; contador -= pass) {
        resultado.innerHTML += `${contador}  \u{1f449}`
    }
}