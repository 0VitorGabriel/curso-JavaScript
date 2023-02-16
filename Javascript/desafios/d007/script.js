var cotacao = Number(prompt('Antes de mais nada. Qual é a cotação do dólar agora?'))

function conversor() {
    var reais_carteira = Number(prompt('Quantos reais vocẽ tem na carteira?'))

    if (reais_carteira.length == 0) {
        alert('ERRO, prencha os campos!')
    } else {
        var dolar = reais_carteira / cotacao
        alert(`Valor convertido em dólar: US$${dolar}`)
    }  
}