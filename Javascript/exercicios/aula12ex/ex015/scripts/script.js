let hours = new Date().getHours()
let image_area = document.querySelector('img#image')
let hours_area = document.querySelector('div#msg')
let body = document.querySelector('body')

function show_hours() {
    hours_area.innerHTML = `Agora são, aproximadamente ${hours} horas`
}

function date_verify() {

    show_hours()

    if (hours >= 0 && hours < 12) {

        image_area.src = './imgs/manha.png'

        body.classList.add('caso_manha')

    } if (hours >= 12 && hours < 18) {

        image_area.src = './imgs/tarde.png'

        body.classList.add('caso_tarde')

    } if (hours >= 18 && hours <= 23) {

        image_area.src = './imgs/noite.png'

        body.classList.add('caso_noite')
    }
}
