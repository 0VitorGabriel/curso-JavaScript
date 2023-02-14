function contar() {
    var txtinicio = document.getElementById('txtinicio')
    var txtfim  = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.getElementById('contagem')

    if (txtinicio.value.length == 0) {
        res.innerHTML = 'Impossivel contar...'
    } else if (txtpasso.value == 0) {
        alert('Passo inválido!, considerando PASSO 1')
    } else if (txtinicio.value < txtfim.value){
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)

        for (var contador = inicio; contador <= fim; contador += passo) {
            res.innerHTML += contador
        }
    } else if (txtinicio.value > txtfim.value){
        for (var contador = inicio; contador >= fim; contador -= passo) {
            res.innerHTML += contador 
        }
    }
}