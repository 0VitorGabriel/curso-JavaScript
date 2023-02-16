function troco() {
    var nome_produto = prompt('Qual produto vocẽ está comprando')
    var valor_produto = prompt(`Quanto custa o ${nome_produto} que vocẽ está comprando?`)
    var texto_pagamento = prompt(`Qual foi o valor que vocẽ deu para pagar ${nome_produto}?`)

    var valor = Number(valor_produto)
    var pagamento = Number(texto_pagamento)

    if (pagamento == valor) {
        alert(`Vocẽ comprou ${nome_produto} que custou ${valor}
Deu R$${pagamento} em dinheiro e não vai receber troco.
Volte sempre!`)
    } else if (pagamento > valor){
        var troco = pagamento - valor
        alert(`Vocẽ comprou ${nome_produto} que custou ${valor}
Deu R$${pagamento} em dinheiro e vai recerber R$${troco} de troco.
Volte sempre!`)
    } else {
        alert(`Compra não finalizada! digite o valor do produto ou acima disso!`)
    }
}