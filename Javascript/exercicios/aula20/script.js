const promise = Promise.resolve('primeiro valor')
const promise2 = Promise.resolve('segundo valor')
const promise3 = Promise.resolve('terceiro valor')

// captura os dados de todas as promises

Promise.all([promise, promise2, promise3])
    .then((values) => {
        console.log(values)
    })
    
// captura o dado da primeira promise que achar um valor

Promise.race([promise, promise2, promise3])
    .then((values) => {
        console.log(values)
    })