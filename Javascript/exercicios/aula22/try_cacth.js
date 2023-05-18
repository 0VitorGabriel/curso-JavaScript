const verifyNumber = (number) => {
    try {
        if (number % 2 == 0) {
            return console.log('par')
        } 

        if (isNaN(number)) {
            throw Error('digite apenas numeros')
        } 
        
        else {
            return console.log('impar')
        }
    } catch (e) {
        console.error('Erro: ' + e.message)
    } finally {
        console.log('fim do programa')
    }
}

const value = 'op'

verifyNumber(value)