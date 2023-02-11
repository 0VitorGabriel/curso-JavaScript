function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'imgs/manha.png'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imgs/tarde.png'
    } else {
        img.src = 'imgs/noite.png'
    }
}