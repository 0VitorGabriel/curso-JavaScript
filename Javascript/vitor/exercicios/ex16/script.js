function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
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
            var genero = 'homem'
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
            var genero = 'mulher'
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
        res.innerText = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
