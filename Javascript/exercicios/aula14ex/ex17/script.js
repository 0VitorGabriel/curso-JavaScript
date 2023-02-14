function contar() {
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var resultado = document.getElementById('contagem')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        resultado.innerHTML = 'Impossivel contar!'
        alert('[ERRO] faltam dados!')
    } else {
        resultado.innerHTML = 'Contando... <br>'

        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)

        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {

            // caso seja uma contagem crescente

            for (var contador = inicio; contador <= fim; contador += passo) {
                resultado.innerHTML += ` ${contador} \u{1F449}`
            }
        } else if (inicio > fim) {

            // caso seja uma contagem regressiva

            for (var contador = inicio; contador >= fim; contador -= passo) {
                resultado.innerHTML += ` ${contador} \u{1f449}`
            } 
        }
        resultado.innerHTML += ` \u{1F3C1}`
    }
}