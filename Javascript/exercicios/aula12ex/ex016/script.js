function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/baby-male.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/adult-male.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imgs/adult-male.jpg')
            } else {
                img.setAttribute('src', 'imgs/elder-male.jpg')
            }

        } else if (fsex[1].checked) {
            var genero = 'Mulher'
            } if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/baby-female.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/adult-female.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imgs/adult-female.jpg')
            } else {
                img.setAttribute('src', 'imgs/elder-female.jpg')
            }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}