let p = new Promise((resolve, reject) => {
    let a = 1 + 1

    if (a == 2) {
        resolve ('sucesso')
    } else {
        reject ('false')
    }
})

p.then((message) => {
    console.log('O código deu certo ' + message)
}).catch((err) => {
    console.log('O código deu errado ' + err)
})