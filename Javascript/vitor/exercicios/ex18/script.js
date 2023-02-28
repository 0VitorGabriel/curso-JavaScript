let txt_numero = document.querySelector('input#numero')
let local_tabuada = document.querySelector('select#local_tabuada')

function verificar_dados() {
    if (txt_numero.value.length == 0) {
        alert('Nenhum dado inserido, por favor digite um número!')
    }
}

function tabuada() {
    verificar_dados()

    local_tabuada.innerHTML = ''

    for (let contador = 1; contador <= 10; contador++) {
        let teste = document.createElement('option')
        let numero = Number(txt_numero.value)

        teste.value = `local_tabuada${contador}`
        teste.text += `${numero} x ${contador} = ${numero * contador}`

        local_tabuada.appendChild(teste)
    }
}