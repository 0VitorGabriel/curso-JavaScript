(async () => {
    try {
        const headers = {
            'contentType': 'application/json',
            'TESTANDO': 'teste'
        }

        const init = {
            method: 'PUT',
            headers: headers,
            body: ({
                title: 'teste de titulooo',
            })
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', init)

        const json = await response.json()

        console.log(json)
    } catch (err) {
        console.log(`erro ao consultar a api: ${err}`)
    }
})()