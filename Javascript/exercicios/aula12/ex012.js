var idade = 66

console.log(`Vocẽ tem ${idade} anos`)

if (idade < 16) {
    console.log(' Vocẽ nao vota')
} else if (idade < 18 || idade > 65) {
     console.log('Seu voto é opcional')
} else {
    console.log('Seu voto é obrigatório')
}
