function conversor() {
    var resultado = document.getElementById('resultado')
    var graus_padrao = Number(prompt('Digite uma temperatura em C (Celsius)'))

    if (graus_padrao.length == 0) {
        alert('ERRO, Preencha os campos para continuar!')
    } else { 
        var fahrenheit = (graus_padrao * 9 / 5) + 32
        var kelvin = graus_padrao + 273.15

        resultado.innerHTML = `<h1>A temperatura ${graus_padrao} C, corresponde a...</h1>`
        resultado.innerHTML += `<p>${fahrenheit} F (Fahrenheit)</p>`
        resultado.innerHTML += `<p>${kelvin} K (Kelvin)</p>`
    }
}