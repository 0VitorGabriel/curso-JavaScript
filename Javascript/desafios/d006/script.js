function conversor() {
    var temperatura = document.getElementById('temperatura')
    var res_fahrenheit = document.getElementById('fahrenheit')
    var res_kelvin = document.getElementById('kelvin')
    var graus_padrao_texto = prompt('Digite uma temperatura em C (Celsius)')

    var graus_padrao = Number(graus_padrao_texto)
    var fahrenheit = (graus_padrao * 9 / 5) + 32
    var kelvin = graus_padrao + 273.15

    if (graus_padrao_texto.length == 0) {
        alert('ERRO, Preencha os campos para continuar!')
    } else { 
        temperatura.innerText = `A temperatura ${graus_padrao} C, corresponde a...`
        res_fahrenheit.innerText = `${fahrenheit} F (Fahrenheit)`
        res_kelvin.innerText = `${kelvin} K (Kelvin)`
    }
}