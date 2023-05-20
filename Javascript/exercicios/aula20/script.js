const promise = Promise.resolve(3)
const promise2 = Promise.resolve(4)
const promise3 = Promise.resolve(5)

Promise.all([promise, promise2, promise3])
    .then((values) => {

    })

Promise.race([promise, promise2, promise3])
    .then((values) => {

    })