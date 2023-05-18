const verifyNumber = (number) => {
    if (isNaN(number)) {
        throw Error('digite apenas numeros')
    } 

    try {
        if (number % 2 == 0) {
            return console.log('par')
        } else {
            return console.log('impar')
        }
    } catch (e) {
        console.log('erro' + e.message)
    }
}

const value = 'op'

verifyNumber(value)