function tabuada() {
    var txtnumero = document.getElementById('txtnumero')
    var select = document.getElementById('tabuada')

    if (txtnumero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var numero = Number(txtnumero.value)
        var contador = 1
        select.innerHTML = ''

        while (contador <= 10){
            contador += 1
            var item = document.createElement('option')
            item.value = `select${contador}`
            item.text += `${numero} x ${contador} = ${numero * contador}`
            select.appendChild(item)
        }
    }
}