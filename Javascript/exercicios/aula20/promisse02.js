const betterDeveloper = 'Gabriel'

const qualMelhorDesenvolvedor = new Promise((resolve, reject) => {
    if (betterDeveloper !== 'Vanessa' && betterDeveloper !== 'Gabriel') {
        reject(
            {
                name: 'isto está errado',
                message: betterDeveloper + '?, realmente'
            }
        )
    } else {
        resolve(
            {
                name: betterDeveloper,
                message: 'CDFs são os melhores'
            }
        )
    }
})  

qualMelhorDesenvolvedor
    .then((message) => {
        console.log(message.name + '? Yeah ' + message.message)
    }).catch((error) => {
        console.log(error.name + ' ' + error.message)
    })