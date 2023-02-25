var amigo = {
    nome: 'José', 
    sexo: 'M', 
    idade: 85, 
    peso: 78.5,
    engordar(p = 0) {
        console.log('engordou!')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(amigo.peso)