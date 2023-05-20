function melhor_banda(banda) {
    return new Promise ((resolve, reject) => {
        if (banda === 'Queen') {
            resolve (
                {
                    sucesso: true,
                    nome_banda: banda,
                    msg: banda + ' é a melhor banda de rock '
                }
            )
        } else {
            reject (
                {
                    sucesso: false,
                    msg: banda + ', é uma péssima banda'
                }
            )
        }
    })
}

function melhor_musica(resposta) {
    return new Promise ((resolve, reject) => {
        if (resposta.sucesso) {
            resolve ('bohemian Rapsody por ' + resposta.nome_banda)
        } else {
            reject ('Você conhece Queen?')
        }
    })
}

(async function () {
    try {
        const response_banda = await melhor_banda('Queen')

        console.log(response_banda)

        const response_som = await melhor_musica(response_banda)

        console.log(response_som)
    } catch (error) {
        console.log(error)
    }
})()
