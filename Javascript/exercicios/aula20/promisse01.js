// sem Promisse

// function sumNumbers() {
//     let result = 1 + 1
    
//     if (result === 2) {
//         successCallback()
//     } else {
//         errorCallback()
//     }
// }

// function successCallback() {
//     console.log('yes, result 2')
// }

// function errorCallback() {
//     console.log('ops, something wrong')
// }

// sumNumbers()

// com Promisse

let sumNumbers = new Promise((resolve, reject) => {
    let result = 1 + 1

    if (result === 2) {
        resolve('yes, result 2')
    } else {
        reject('ops, something wrong')
    }
})

sumNumbers.then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})