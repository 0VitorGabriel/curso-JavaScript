function melhor_banda_rock(banda) {
    return new Promise ( (resolve, reject) => {
        if (banda == 'Queen') {
            resolve (
                {
                    sucesso: true,
                    nome_banda: banda,
                    mensagem: banda + ' é a sua banda preferida!'
                }
            )
        } else {
            reject (
                {
                    sucesso: false,
                    mensagem: 'banda ruim'
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

async function faca_trabalho() {
    try{
        const respostaDaFuncao_banda = await melhor_banda_rock('Kiss')
    
        console.log(respostaDaFuncao_banda)
    
        const respostaDaFuncao_musica = await melhor_musica(respostaDaFuncao_banda)
    
        console.log(respostaDaFuncao_musica)
    } catch (erro) {
        console.log(erro.mensagem)
    }
}

faca_trabalho()