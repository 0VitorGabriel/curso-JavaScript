const jogador1 = {
    nome: 'João',
    velocidade: 80,
    magia: 300,
    id: 000
}

const jogador2 = {
    nome: 'Marcos',
    velocidade: 80,
    magia: 300,
}

const jogador3 = {
    ...jogador1,
    ...jogador2
}

console.log(jogador3)